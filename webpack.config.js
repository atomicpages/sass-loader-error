const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({ template: path.resolve("./public/index.html") }),
  ].filter(Boolean),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // eslint-disable-next-line id-denylist
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'sass-loader'
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                auto: true,
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sourceMap: true,
              // additionalData: `@use "${path.resolve(__dirname, '../src/styles/_pcr.scss')}";`,
            },
          },
          // {
          //   loader: 'sass-resources-loader',
          //   options: {
          //     resources: '../src/styles/_pcr.scss',
          //   },
          // },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ].filter(Boolean),
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|svg|ttf|otf|eot)$/,
        loader: "file-loader",
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    compress: true,
    port: 9005,
    hot: true,
  },
};
