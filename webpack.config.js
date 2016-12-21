var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: './bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel', // can also use babel-loader
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'raw', // can also use raw-loader
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css', // this loads multiple loaders (right to left), first css loader then style loader
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus',
        exclude: /node_modules/
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
}

module.exports = config;