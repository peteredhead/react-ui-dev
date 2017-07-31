var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/epg.jsx',
  output: { filename: './dist/react-radiodns-epg.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};