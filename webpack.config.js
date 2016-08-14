var webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    publicPath: '/cfrp-analytics/build/',	// Staging
    // publicPath: '/js/app/', 				// Production
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
