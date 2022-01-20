const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;

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
                importLoaders: 2,
                sourceMap: false,
                modules: true,
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
                importLoaders: 2,
                sourceMap: false,
                modules: false,
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
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    resolve: {
      extensions: ['.js', '.scss'],
    },
  };
};