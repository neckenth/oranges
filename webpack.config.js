require("@babel/register");
const path = require("path");

module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: path.join(__dirname, "/public/dist/"),
    publicPath: "/public/dist/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" },
      {
        // look for .css or .scss files
        test: /\.(css)$/,
        // in the `src` directory
        // include: [path.resolve(paths.appSrc)],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              // discardDuplicates: true,
              // importLoaders: 1,
              // This enables local scoped CSS based in CSS Modules spec
              modules: false,
              // generates a unique name for each class (e.g. app__app___2x3cr)
              // localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          // {
          //   loader: "sass-loader",
          //   options: {
          //     sourceMap: true
          //   }
          // }
        ],
      },
    ],
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  plugins: [],
};
