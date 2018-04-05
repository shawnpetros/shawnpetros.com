# just a simple makefile to copy stuff and build with webpack

test:
	npm test

build: clean
	cp -av ./public/. ./dist/
	npm run build -- --mode 'production' --colors

clean:
	rm -rf dist
