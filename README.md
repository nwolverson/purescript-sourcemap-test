# PureScript Source maps test

Simple setup showing end to end source maps with webpack. Note that purs-loader/purescript-webpack-plugin are not used, as they use psc-bundle which does not (yet) support source maps.

Works with `psc` as of [0.8.1](https://github.com/purescript/purescript/releases/tag/v0.8.1)/0.8.2

Usage:
```
bower install
npm install
npm install -g webpack-dev-server

pulp build --source-maps
webpack-dev-server
```

### Browserify

It should be possible to do the same with browserify, but a naive browserify invocation will not combine source maps. 
