const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-0']
          }
        }
      }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting',
      template: path.resolve(__dirname, './template/index.html')
    })
  ]
}
