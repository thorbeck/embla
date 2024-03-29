const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: env.development ? "development" : "production",
    devtool: env.development ? "eval" : false,
    entry: {
      main: path.resolve(__dirname, "src", "index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "[name][ext]",
      clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
        watch: false,
      },
      client: {
        overlay: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(svg|png|jpg|gif|ico|xml|webmanifest|woff2)$/,
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          loader: "html-loader",
          options: {
            minimize: false,
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: false,
        inject: "body",
      }),
    ],
    optimization: {
      minimize: env.development ? false : true,
    },
    performance: {
      hints: env.production ? "error" : false,
      maxEntrypointSize: env.production ? 170000 : 512000,
    },
  };
};
