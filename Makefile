
.EXPORT_ALL_VARIABLES:
.ONESHELL:
.PHONY: all start prep css js prod html
.SILENT:

PATH := $(PWD)/node_modules/.bin:$(PATH)
SHELL := /bin/bash

start: NODE_ENV=development

all: prep css js prod html
	gzip --best --keep --no-name public/index.html

start: prep
	node server \
		--bang "$(MAKE) css js html" \
		--scss "$(MAKE) css" --js "$(MAKE) js" \
		--watch "src"

prep:
	rm -rf public && mkdir public
	rm -rf tmp && mkdir tmp
	cp -r src/assets/* public
	# node collect

css:
	node-sass src/app.scss -o public --source-map true --source-map-contents

js:
	$(ENV) rollup src/app.js --config --sourcemap --file public/app.js

prod:
	tsc public/app.js --allowJs --lib --target es5 --outFile public/app.min.js
	uglifyjs public/app.min.js --compress --mangle --output public/app.min.js
	cleancss -O2 public/app.css --output public/app.min.css

html:
	$(ENV) rollup src/index.js --config --format cjs | node > public/index.html
