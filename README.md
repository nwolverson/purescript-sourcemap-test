# PureScript Source maps test

Simple setup showing end to end source maps with webpack. This skips using purs-loader which would need the extra flag added.

Build `psc` from here: https://github.com/nwolverson/purescript/tree/sourcemap-pr

Usage:
```
bower install
npm install
npm install -g webpack-dev-server

pulp build --source-maps
webpack-dev-server
```
