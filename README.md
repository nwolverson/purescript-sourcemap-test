# PureScript Source maps test

Simple setup showing end to end source maps with webpack and browserify. Note that purs-loader/purescript-webpack-plugin are not used, as they use psc-bundle which does not (yet) support source maps.

Works with `psc` as of [0.8.1](https://github.com/purescript/purescript/releases/tag/v0.8.1)/0.8.2

### Build everything

The `package.json` for this project contains some run scripts to build with browserify and webpack preserving
source maps.

Usage:
```
bower install && npm install

npm run -s build-all
http-server
```

(You can use any http server to serve the project root directory: [`http-server`](https://www.npmjs.com/package/http-server)
is one such that can be installed with npm (`npm install -g http-server`)).

### webpack

Usage:
```
bower install && npm install
npm install -g webpack-dev-server

pulp build --source-maps
webpack-dev-server
```

(or see build scripts/build-all above).

### Browserify

It's possible to do the same with browserify, but browserify does not in itself
combine source maps from its own process with input source maps. One option is to
use [sorcery](https://github.com/Rich-Harris/sorcery) to glue purescript and browserify
source maps together.

Usage:
```
bower install && npm install

pulp build --source-maps
browserify --debug .browserify.js -o browserify.js
sorcery -i browserify.js

http-server
```
