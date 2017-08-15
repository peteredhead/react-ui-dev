var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/spi.js',
  output: { filename: './dist/hybridradio-spi.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
};