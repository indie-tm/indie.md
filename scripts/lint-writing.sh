#!/usr/bin/env bash
# Enforces writing rules that Biome cannot check:
# 1. No em dashes (U+2014)
# 2. No emojis

set -euo pipefail

errors=0

# Check for em dashes in source and content files
em_dash_files=$(grep -rl --exclude-dir=generated $'\u2014' src/ tests/ docs/ CLAUDE.md 2>/dev/null || true)
if [ -n "$em_dash_files" ]; then
  echo "ERROR: Em dashes found in the following files:"
  echo "$em_dash_files" | while read -r f; do
    grep -n $'\u2014' "$f" | head -5 | sed "s|^|  $f:|"
  done
  errors=$((errors + 1))
fi

# Check for emojis in all source, content, test, and doc files
# Matches common emoji ranges: emoticons, dingbats, symbols, supplemental symbols
emoji_files=$(grep -rlP --exclude-dir=generated '[\x{1F300}-\x{1F9FF}\x{2600}-\x{26FF}\x{2700}-\x{27BF}\x{FE00}-\x{FE0F}\x{1FA00}-\x{1FA6F}\x{1FA70}-\x{1FAFF}\x{200D}\x{2764}]' src/ tests/ docs/ CLAUDE.md 2>/dev/null || true)
if [ -n "$emoji_files" ]; then
  echo "ERROR: Emojis found in the following files:"
  echo "$emoji_files" | while read -r f; do
    grep -nP '[\x{1F300}-\x{1F9FF}\x{2600}-\x{26FF}\x{2700}-\x{27BF}\x{FE00}-\x{FE0F}\x{1FA00}-\x{1FA6F}\x{1FA70}-\x{1FAFF}\x{200D}\x{2764}]' "$f" | head -5 | sed "s|^|  $f:|"
  done
  errors=$((errors + 1))
fi

if [ $errors -gt 0 ]; then
  echo ""
  echo "Writing rules violated. Fix the above issues before committing."
  exit 1
fi

echo "Writing rules: OK"
