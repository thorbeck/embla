const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
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
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
