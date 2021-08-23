MAKEFLAGS+="-j 2"

.PHONY: all

all: dev

install:
	yarn
	cd client && yarn

dev-server:
	yarn start:dev
dev-client:
	cd client && node scripts/watch

dev: dev-server dev-client
