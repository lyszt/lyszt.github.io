run:
	./scripts/run.sh

build:
	bundle exec jekyll build

install:
	bundle install
	npm install

install-arch:
	# Arch-specific install: installs system packages then project dependencies
	./scripts/install-arch.sh
