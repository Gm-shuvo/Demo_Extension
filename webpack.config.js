const path = require("path");
module.exports = {
  entry: './src/popup.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
};
