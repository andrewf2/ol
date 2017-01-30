var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: ['../node_modules/babel-polyfill',path.join(srcPath, 'js', 'app.js')],
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          },
           { test: /\.json$/, loader: 'json-loader' }
      ]
  },
  node: {
  	console: true,
  	fs: 'empty',
  	net: 'empty',
  	tls: 'empty'
	}
};