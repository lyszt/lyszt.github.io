#!/usr/bin/env bash
# Basic SEO check script for this Jekyll site
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Checking pages for important SEO elements...\n"

# Check for description meta
echo "Pages without meta description:"; echo "-------------------------------"
for f in $(ls *.html _pages/**/*.html _posts/**/*.md 2>/dev/null || true); do
  if [ -f "$f" ]; then
    if ! grep -qi '<meta name="description"' "$f"; then
      echo " - $f"
    fi
  fi
done

# Check for images without alt
echo "\nImages without alt attribute:"; echo "-------------------------------"
grep -RIn "<img[^>]*src=[\'\"]" --exclude-dir=.git --exclude-dir=_site | while read -r line; do
  f="${line%%:*}"
  n="${line#*:}"
  lnum="${n%%:*}"
  imgline="$(sed -n "${lnum}p" "$f")"
  if ! echo "$imgline" | grep -qi 'alt='; then
    echo " - $f:$lnum -> $imgline"
  fi
done | sort -u || true

# Check for duplicate OG tags in files (simple heuristic)
echo "\nPages with multiple OG tags (og:title occurrences):"; echo "-------------------------------"
grep -RIn "og:title" --exclude-dir=.git --exclude-dir=_site || true

# Robots file check
if [ -f robots.txt ]; then
  echo "\nrobots.txt contents:"; echo "---------------------"
  cat robots.txt
else
  echo "\nNo robots.txt found."
fi

echo "\nSEO check finished."
