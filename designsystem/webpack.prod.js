const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
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
        test: /\.(scss)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
              exportType: 'string',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.(svg|png|jpg|gif|ico|webmanifest)$/,
        type: 'asset/resource',
      },
      { test: /\.js$/, use: ['babel-loader'] },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
  performance: {
    hints: false,
  },
};
