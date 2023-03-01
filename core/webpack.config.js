const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

function getEntries(pattern) {
  const entries = {
    embla: path.resolve(__dirname, "src", "index.js"),
    polyfill: path.resolve(__dirname, "src", "polyfill.js"),
  };
  glob.sync(pattern).forEach((file) => {
    const outputFileKey =
      "embla-" + path.basename(file).replace("_", "").replace(".js", "");
    entries[outputFileKey] = path.join(__dirname, file);
  });

  return entries;
}

module.exports = (env) => {
  return {
    mode: env.development ? "development" : "production",
    devtool: env.development ? "eval" : false,
    entry: getEntries("src/elements/**/*.js"),

    output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "assets/[name][ext]",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.module\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]--[hash:base64:8]",
                },
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.shadow\.scss$/,
          use: [
            {
              loader: "css-loader",
              options: {
                exportType: "string",
              },
            },
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
          exclude: /\.(module|shadow)\.scss$/,
        },
        {
          test: /\.(svg|png|jpg|gif|ico|webmanifest)$/,
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
    plugins: [new MiniCssExtractPlugin()],
    optimization: {
      minimize: env.production,
      minimizer: [new CssMinimizerPlugin(), "..."],
    },
    performance: {
      hints: env.production ? false : "warning",
    },
  };
};
