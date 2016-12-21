module.exports = {
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
      }
    ]
  }
};