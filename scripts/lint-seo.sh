#!/usr/bin/env bash
# Enforces SEO rules on the built HTML output.
# Run after `npm run build`.

set -euo pipefail

DIST="dist"
errors=0

if [ ! -d "$DIST" ]; then
  echo "ERROR: dist/ directory not found. Run npm run build first."
  exit 1
fi

# Check every HTML file
for file in $(find "$DIST" -name "*.html" -not -name "404.html"); do
  relpath="${file#$DIST/}"

  # Must have <title>
  if ! grep -q '<title>' "$file"; then
    echo "ERROR: Missing <title> in $relpath"
    errors=$((errors + 1))
  fi

  # Must have meta description
  if ! grep -q 'name="description"' "$file"; then
    echo "ERROR: Missing meta description in $relpath"
    errors=$((errors + 1))
  fi

  # Must have canonical
  if ! grep -q 'rel="canonical"' "$file"; then
    echo "ERROR: Missing canonical link in $relpath"
    errors=$((errors + 1))
  fi

  # Must have og:title
  if ! grep -q 'property="og:title"' "$file"; then
    echo "ERROR: Missing og:title in $relpath"
    errors=$((errors + 1))
  fi

  # Must have exactly one h1
  h1_count=$(grep -o '<h1' "$file" | wc -l | tr -d ' ')
  if [ "$h1_count" -ne 1 ]; then
    echo "ERROR: Expected 1 h1 tag, found $h1_count in $relpath"
    errors=$((errors + 1))
  fi

  # Must have lang="en"
  if ! grep -q 'lang="en"' "$file"; then
    echo "ERROR: Missing lang=\"en\" in $relpath"
    errors=$((errors + 1))
  fi
done

# Check URLs use indie.md domain (not https://indie.tm as a URL)
wrong_domain=$(grep -rlP 'https?://indie\.tm' "$DIST" --include="*.html" 2>/dev/null | head -5 || true)
if [ -n "$wrong_domain" ]; then
  echo "ERROR: Found 'https://indie.tm' URL in HTML (should be https://indie.md):"
  echo "$wrong_domain" | while read -r f; do
    grep -nP 'https?://indie\.tm' "$f" | head -3 | sed "s|^|  $f:|"
  done
  errors=$((errors + 1))
fi

# Check sitemap exists
if [ ! -f "$DIST/sitemap-index.xml" ]; then
  echo "ERROR: Missing sitemap-index.xml"
  errors=$((errors + 1))
fi

# Check robots.txt has sitemap reference
if [ -f "$DIST/robots.txt" ]; then
  if ! grep -q 'Sitemap:' "$DIST/robots.txt"; then
    echo "ERROR: robots.txt missing Sitemap: directive"
    errors=$((errors + 1))
  fi
fi

# Check CNAME exists
if [ ! -f "$DIST/CNAME" ]; then
  echo "ERROR: Missing CNAME file"
  errors=$((errors + 1))
fi

# Check no JavaScript files
js_count=$(find "$DIST" -name "*.js" | wc -l | tr -d ' ')
if [ "$js_count" -gt 0 ]; then
  echo "ERROR: Found $js_count JavaScript files in dist/ (should be zero)"
  errors=$((errors + 1))
fi

# Check avatar image sizes (should be under 50KB)
for img in "$DIST"/avatars/*.png; do
  if [ -f "$img" ]; then
    size=$(wc -c < "$img" | tr -d ' ')
    if [ "$size" -gt 51200 ]; then
      echo "ERROR: Avatar $(basename "$img") is $(( size / 1024 ))KB (must be under 50KB)"
      errors=$((errors + 1))
    fi
  fi
done

if [ $errors -gt 0 ]; then
  echo ""
  echo "SEO rules violated: $errors issue(s) found."
  exit 1
fi

echo "SEO lint: OK"
