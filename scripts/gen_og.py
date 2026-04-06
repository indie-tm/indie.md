#!/usr/bin/env python3
"""Generate OG images for indie.md content pages.

Reads frontmatter from events, journeys, people, and advice entries.
Generates a 1200x630 social card for each, matching the site's warm palette.

Runs as a build step before Astro. Output goes to public/og/.
"""
import json
import math
import os
import re
import textwrap
from datetime import datetime

from PIL import Image, ImageDraw, ImageFont

SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.join(SCRIPTS_DIR, "..")
FONTS_DIR = os.path.join(SCRIPTS_DIR, "fonts")

# indie.md color palette (from global.css, light mode)
BG_COLOR = (250, 248, 245)       # hsl(40, 33%, 97%)
TITLE_COLOR = (34, 31, 28)       # hsl(30, 10%, 12%)
PRIMARY_COLOR = (230, 107, 26)   # hsl(24, 80%, 50%)
MUTED_COLOR = (127, 117, 108)    # hsl(30, 8%, 46%)
BORDER_COLOR = (235, 230, 224)   # warm separator

W, H = 1200, 630
SITE_NAME = "indie.md"


def get_display_font(size):
    """Instrument Serif for headings."""
    candidates = [
        os.path.join(FONTS_DIR, "InstrumentSerif-Regular.ttf"),
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
    ]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except (OSError, IOError):
            continue
    return ImageFont.load_default()


def get_body_font(size):
    """DM Sans for body text."""
    candidates = [
        os.path.join(FONTS_DIR, "DMSans-Variable.ttf"),
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except (OSError, IOError):
            continue
    return ImageFont.load_default()


def parse_frontmatter(filepath):
    """Extract YAML frontmatter fields from a markdown file."""
    with open(filepath, "r") as f:
        content = f.read()

    fm_match = re.match(r"^---\n(.*?)\n---", content, re.DOTALL)
    if not fm_match:
        return {}

    result = {}
    for line in fm_match.group(1).split("\n"):
        if ":" in line and not line.startswith(" ") and not line.startswith("-"):
            key, val = line.split(":", 1)
            result[key.strip()] = val.strip().strip('"').strip("'")

    body = content[fm_match.end():]
    result["word_count"] = len(re.findall(r"\w+", body))

    return result


def draw_badge(draw, x, y, text, font):
    """Draw a rounded badge with primary color background."""
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    pad_x, pad_y = 14, 6
    draw.rounded_rectangle(
        [(x, y), (x + text_w + pad_x * 2, y + text_h + pad_y * 2)],
        radius=12,
        fill=PRIMARY_COLOR,
    )
    draw.text((x + pad_x, y + pad_y), text, font=font, fill=BG_COLOR)
    return text_w + pad_x * 2


def generate_event_og(meta, output_path):
    """Generate OG image for an event page."""
    img = Image.new("RGB", (W, H), BG_COLOR)
    draw = ImageDraw.Draw(img)

    font_title = get_display_font(54)
    font_subtitle = get_body_font(22)
    font_meta = get_body_font(18)
    font_badge = get_body_font(14)

    left = 60
    y = 60

    # Badge
    badge_w = draw_badge(draw, left, y, "Event", font_badge)
    y += 50

    # Title
    for line in textwrap.wrap(meta.get("title", ""), width=32):
        draw.text((left, y), line, font=font_title, fill=TITLE_COLOR)
        bbox = draw.textbbox((left, y), line, font=font_title)
        y = bbox[3] + 8
    y += 16

    # Subtitle
    subtitle = meta.get("subtitle", "")
    if subtitle:
        for line in textwrap.wrap(subtitle, width=60):
            draw.text((left, y), line, font=font_subtitle, fill=MUTED_COLOR)
            bbox = draw.textbbox((left, y), line, font=font_subtitle)
            y = bbox[3] + 6
    y += 24

    # Date and location
    raw_date = meta.get("date", "")
    location = meta.get("location", "")
    if raw_date:
        try:
            date_str = datetime.strptime(raw_date, "%Y-%m-%d").strftime("%B %d, %Y")
        except ValueError:
            date_str = raw_date
        draw.text((left, y), date_str, font=font_meta, fill=MUTED_COLOR)
        y += 28
    if location:
        draw.text((left, y), location, font=font_meta, fill=MUTED_COLOR)

    # Bottom separator and site name
    draw.line([(left, H - 50), (W - left, H - 50)], fill=BORDER_COLOR, width=1)
    draw.text((left, H - 40), SITE_NAME, font=font_meta, fill=PRIMARY_COLOR)

    img.save(output_path, "PNG")


def generate_journey_og(meta, output_path):
    """Generate OG image for a journey page."""
    img = Image.new("RGB", (W, H), BG_COLOR)
    draw = ImageDraw.Draw(img)

    font_title = get_display_font(50)
    font_subtitle = get_body_font(22)
    font_meta = get_body_font(18)
    font_badge = get_body_font(14)

    left = 60
    y = 60

    # Badge
    draw_badge(draw, left, y, "Journey", font_badge)
    y += 50

    # Title
    for line in textwrap.wrap(meta.get("title", ""), width=34):
        draw.text((left, y), line, font=font_title, fill=TITLE_COLOR)
        bbox = draw.textbbox((left, y), line, font=font_title)
        y = bbox[3] + 8
    y += 16

    # Subtitle
    subtitle = meta.get("subtitle", "")
    if subtitle:
        for line in textwrap.wrap(subtitle, width=60):
            draw.text((left, y), line, font=font_subtitle, fill=MUTED_COLOR)
            bbox = draw.textbbox((left, y), line, font=font_subtitle)
            y = bbox[3] + 6
    y += 24

    # Reading time
    word_count = meta.get("word_count", 0)
    if word_count:
        reading_time = max(1, math.ceil(int(word_count) / 200))
        draw.text((left, y), f"{reading_time} min read", font=font_meta, fill=MUTED_COLOR)

    # Bottom
    draw.line([(left, H - 50), (W - left, H - 50)], fill=BORDER_COLOR, width=1)
    draw.text((left, H - 40), SITE_NAME, font=font_meta, fill=PRIMARY_COLOR)

    img.save(output_path, "PNG")


def generate_person_og(meta, avatar_path, output_path):
    """Generate OG image for a person page."""
    img = Image.new("RGB", (W, H), BG_COLOR)
    draw = ImageDraw.Draw(img)

    font_name = get_display_font(56)
    font_tagline = get_body_font(24)
    font_meta = get_body_font(18)
    font_badge = get_body_font(14)

    left = 60
    y = 60

    # Badge
    draw_badge(draw, left, y, "Builder", font_badge)
    y += 50

    # Avatar
    if avatar_path and os.path.exists(avatar_path):
        avatar = Image.open(avatar_path).convert("RGBA")
        avatar = avatar.resize((80, 80), Image.LANCZOS)
        mask = Image.new("L", (80, 80), 0)
        ImageDraw.Draw(mask).ellipse([(0, 0), (79, 79)], fill=255)
        img.paste(avatar, (left, y), mask)
        y += 100

    # Name
    name = meta.get("name", "")
    draw.text((left, y), name, font=font_name, fill=TITLE_COLOR)
    bbox = draw.textbbox((left, y), name, font=font_name)
    y = bbox[3] + 16

    # Tagline
    tagline = meta.get("tagline", "")
    if tagline:
        for line in textwrap.wrap(tagline, width=50):
            draw.text((left, y), line, font=font_tagline, fill=MUTED_COLOR)
            bbox = draw.textbbox((left, y), line, font=font_tagline)
            y = bbox[3] + 6

    # Bottom
    draw.line([(left, H - 50), (W - left, H - 50)], fill=BORDER_COLOR, width=1)
    draw.text((left, H - 40), SITE_NAME, font=font_meta, fill=PRIMARY_COLOR)

    img.save(output_path, "PNG")


def generate_advice_og(entry, output_path):
    """Generate OG image for an advice page."""
    img = Image.new("RGB", (W, H), BG_COLOR)
    draw = ImageDraw.Draw(img)

    font_title = get_display_font(48)
    font_body = get_body_font(20)
    font_meta = get_body_font(18)
    font_badge = get_body_font(14)

    left = 60
    y = 60

    # Badge with category
    category = entry.get("category", "advice").capitalize()
    draw_badge(draw, left, y, category, font_badge)
    y += 50

    # Title
    for line in textwrap.wrap(entry.get("title", ""), width=36):
        draw.text((left, y), line, font=font_title, fill=TITLE_COLOR)
        bbox = draw.textbbox((left, y), line, font=font_title)
        y = bbox[3] + 8
    y += 16

    # Body preview
    body = entry.get("content", "")
    if body:
        for line in textwrap.wrap(body, width=65)[:3]:
            draw.text((left, y), line, font=font_body, fill=MUTED_COLOR)
            bbox = draw.textbbox((left, y), line, font=font_body)
            y = bbox[3] + 6

    # Bottom
    draw.line([(left, H - 50), (W - left, H - 50)], fill=BORDER_COLOR, width=1)
    draw.text((left, H - 40), SITE_NAME, font=font_meta, fill=PRIMARY_COLOR)

    img.save(output_path, "PNG")


def ensure_dir(path):
    os.makedirs(os.path.dirname(path), exist_ok=True)


def main():
    generated = 0

    # Events
    events_dir = os.path.join(ROOT_DIR, "src", "content", "events")
    og_events_dir = os.path.join(ROOT_DIR, "public", "og", "events")
    os.makedirs(og_events_dir, exist_ok=True)

    if os.path.exists(events_dir):
        for f in os.listdir(events_dir):
            if not f.endswith(".md"):
                continue
            slug = f.replace(".md", "")
            output = os.path.join(og_events_dir, f"{slug}.png")
            if os.path.exists(output):
                continue
            meta = parse_frontmatter(os.path.join(events_dir, f))
            if meta.get("title"):
                generate_event_og(meta, output)
                generated += 1
                print(f"  Generated: og/events/{slug}.png")

    # Journeys
    journeys_dir = os.path.join(ROOT_DIR, "src", "content", "journeys")
    og_journeys_dir = os.path.join(ROOT_DIR, "public", "og", "journeys")
    os.makedirs(og_journeys_dir, exist_ok=True)

    if os.path.exists(journeys_dir):
        for f in os.listdir(journeys_dir):
            if not f.endswith(".md"):
                continue
            slug = f.replace(".md", "")
            output = os.path.join(og_journeys_dir, f"{slug}.png")
            if os.path.exists(output):
                continue
            meta = parse_frontmatter(os.path.join(journeys_dir, f))
            if meta.get("title"):
                generate_journey_og(meta, output)
                generated += 1
                print(f"  Generated: og/journeys/{slug}.png")

    # People
    people_dir = os.path.join(ROOT_DIR, "src", "content", "people")
    og_people_dir = os.path.join(ROOT_DIR, "public", "og", "people")
    os.makedirs(og_people_dir, exist_ok=True)

    if os.path.exists(people_dir):
        for f in os.listdir(people_dir):
            if not f.endswith(".md"):
                continue
            slug = f.replace(".md", "")
            output = os.path.join(og_people_dir, f"{slug}.png")
            if os.path.exists(output):
                continue
            meta = parse_frontmatter(os.path.join(people_dir, f))
            avatar_path = None
            avatar_ref = meta.get("avatar", "")
            if avatar_ref:
                avatar_path = os.path.join(ROOT_DIR, "public", avatar_ref.lstrip("/"))
            if meta.get("name"):
                generate_person_og(meta, avatar_path, output)
                generated += 1
                print(f"  Generated: og/people/{slug}.png")

    # Advice (from generated index)
    advice_path = os.path.join(ROOT_DIR, "src", "generated", "advice-index.json")
    og_advice_dir = os.path.join(ROOT_DIR, "public", "og", "advice")
    os.makedirs(og_advice_dir, exist_ok=True)

    if os.path.exists(advice_path):
        with open(advice_path, "r") as f:
            advice_entries = json.load(f)
        for entry in advice_entries:
            slug = entry.get("slug", "")
            if not slug:
                continue
            output = os.path.join(og_advice_dir, f"{slug}.png")
            if os.path.exists(output):
                continue
            generate_advice_og(entry, output)
            generated += 1
            print(f"  Generated: og/advice/{slug}.png")

    print(f"Generated {generated} OG image(s)")


if __name__ == "__main__":
    main()
