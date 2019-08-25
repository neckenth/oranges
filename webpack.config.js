require("babel-register")

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    publicPath: '/',
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
