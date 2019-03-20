const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: {
    index: ['webpack-hot-middleware/client', './client/index.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ['syntax-dynamic-import', 'transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template/index.html'),
      filename: path.resolve(__dirname, './client/index.html'),
      alwaysWriteToDisk: true,
      title: 'demo'
    }),
    new HtmlWebpackHarddiskPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        commons: {
          test: /[\\/]src[\\/]js[\\/]/,
          minChunks: 2,
          reuseExistingChunk: true
        }
      }
    }
  },
  mode: 'development'
});