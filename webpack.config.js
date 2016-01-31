var process = require('process');
var path = require ('path');
var srcs = ['src[]=bower_components/purescript-*/src/**/*.purs', 'src[]=src/**/*.purs'];
var ffis = ['ffi[]=bower_components/purescript-*/src/**/*.js'];


module.exports = {
      cache: true,
      context: path.resolve(process.cwd(), "src"),
      entry: "./.webpack.js",
      debug: true,
      devtool: "source-map",
      output: {
        path: process.cwd(),
        pathinfo: true,
        filename: "app.js"
      },
      module: {
        loaders: [
            {
              test: /\.js$/,
              loader: "source-map-loader"
            }

        ]
      },
      resolve: {
        modulesDirectories: [
          "node_modules",
          "output"
        ],
        extensions: [ "", ".js", ".purs" ]
      },
      resolveLoader: {
        root: path.resolve(__dirname, "node_modules")
      }
    };
