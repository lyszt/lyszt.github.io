#!/usr/bin/env bash
# install-arch.sh
# Installs system and project dependencies (Ruby, Bundler, Node/NPM) for Arch Linux
# Run this script from the repo root: ./scripts/install-arch.sh

set -euo pipefail

REPO_ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT_DIR"

# Ensure pacman is present
if ! command -v pacman >/dev/null 2>&1; then
  echo "This script is intended to run on Arch Linux (pacman not found). Exiting." >&2
  exit 1
fi

# Allow running as normal user; sudo package installs
SUDO=""
if [[ $(id -u) -ne 0 ]]; then
  if command -v sudo >/dev/null 2>&1; then
    SUDO=sudo
  else
    echo "Please re-run as root (or install sudo)." >&2
    exit 1
  fi
fi

echo "Updating pacman and installing base packages (ruby, nodejs, npm, base-devel, git)"
$SUDO pacman -Syu --noconfirm --needed base-devel ruby nodejs npm git

# Optional extras that are useful for Jekyll builds and common gems
$SUDO pacman -S --noconfirm --needed imagemagick libffi libyaml zlib xz

# Install Bundler if needed
if ! command -v bundle >/dev/null 2>&1; then
  echo "Installing Bundler via gem (requires root/sudo)"
  $SUDO gem install bundler --no-document
else
  echo "Bundler already available."
fi

# Use a local bundle path so gems are kept in the repo (no system gem pollution)
echo "Configuring bundler to install gems under vendor/bundle"
bundle config set --local path 'vendor/bundle'

echo "Installing Ruby gems from Gemfile via bundler"
bundle install

# Install Node packages (use npm ci if lockfile exists)
if [ -f package-lock.json ]; then
  echo "Installing Node dependencies with npm ci"
  npm ci
else
  echo "Installing Node dependencies with npm install"
  npm install
fi

# Print summary
cat <<EOF
✅ All dependencies installed.
- Ruby: $(ruby --version 2>/dev/null || true)
- Bundler: $(bundle --version 2>/dev/null || true)
- Node: $(node --version 2>/dev/null || true)
- npm: $(npm --version 2>/dev/null || true)

Run 'make build' or 'bundle exec jekyll serve' to test the site.
EOF
