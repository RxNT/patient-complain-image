const webpack = require("webpack");
const path = require("path");

module.exports = {
  cache: true,
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: "react-complaint-image.js",
    library: "ReactComplaintImage",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } })
  ],
  devtool: "source-map",
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
      }
    ]
  }
};