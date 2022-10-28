const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.development ? 'development' : 'production',
    devtool: env.development ? 'inline-source-map' : false,
    entry: {
      core: path.resolve(__dirname, 'src', 'core.js'),
      elements: path.resolve(__dirname, 'src', 'elements.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist', 'core'),
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.module\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:8]',
                },
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.shadow\.scss$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                exportType: 'string',
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
          exclude: /\.(module|shadow)\.scss$/,
        },
        {
          test: /\.(svg|png|jpg|gif|ico|webmanifest)$/,
          type: 'asset/resource',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
      extensions: ['.js'],
    },
    optimization: {
      minimize: env.production,
      minimizer: [new CssMinimizerPlugin(), '...'],
    },
    performance: {
      hints: env.production ? false : 'warning',
    },
  };
};
