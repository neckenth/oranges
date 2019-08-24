const resolve = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
};
