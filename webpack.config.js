require("@babel/register")
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/public/dist'),
    publicPath: '/public/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: []
};
