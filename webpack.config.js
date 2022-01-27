const webpack = require("webpack");
const path = require("path");

const config = {
   entry: ["react-hot-loader/patch", "./src/index.js"],
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: {
                     importLoaders: 1,
                  },
               },
               "postcss-loader",
            ],
         },
         {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /favicon\.ico$/,
            use: "file-loader?name=[name].[ext]",
         },
      ],
   },
   devServer: {
      historyApiFallback: true,
      static: {
         directory: "./dist",
      },
   },
};

module.exports = config;
