# PureScript Source maps test

Simple setups showing end to end source maps with webpack and browserify. 

TODO: Use `psc-bundle`, which finally supports source maps, but requires them
to be glued together externally.

TODO: Show the new `purs` executable instead, test.

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

pulp build -- --source-maps
webpack-dev-server
```

(or see build scripts/build-all above).

### webpack (purescript webpack plugin)

Webpack via `purs-loader`/`purescript-webpack-plugin` sshould support source
maps, probably whether `psc-bundle` is used or not, but the example I previously referred to for such support - 
[purescript-webpack-example](https://github.com/ethul/purescript-webpack-example) - does not currently support source maps.

### Browserify

It's possible to do the same with browserify, but browserify does not in itself
combine source maps from its own process with input source maps. One option is to
use [sorcery](https://github.com/Rich-Harris/sorcery) to glue purescript and browserify
source maps together.

Usage:
```
bower install && npm install

pulp build -- --source-maps
browserify --debug .browserify.js -o browserify.js
sorcery -i browserify.js

http-server
```

### Bundle

`psc-bundle` now supports source maps. Note that `pulp` will only pass the source maps parameter to the initial compile command, so bundling must be done
as a 2nd step, not a `pulp build --to` or variant thereof. The below may work:

```
pulp build -- --source-maps
psc-bundle 'output/*/*.js' -m Main --main Main -o bundle.js --source-maps
sorcery -i bundle.js
```

### Direct CommonJS

When using PureScript code directly as CommonJS modules, such as in Node or Electron,
source maps can be used directly with no additional tooling.
