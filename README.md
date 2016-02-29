# PureScript Source maps test

Simple setup showing end to end source maps with webpack. This skips using purs-loader which would need the extra flag added.

Works with `psc` as of [0.8.1](https://github.com/purescript/purescript/releases/tag/v0.8.1)

Usage:
```
bower install
npm install
npm install -g webpack-dev-server

pulp build --source-maps
webpack-dev-server
```
