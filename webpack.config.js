const HtmlPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const path = require('path')

module.exports = {
  mode: "development", // production
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'public')
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.jpg|bmp|png|gif$/, use: 'url-loader' },
      { test: /\.ttf|svg|eot|woff|woff2$/, use: 'url-loader' },
      {test: /\.scss$/, use:['style-loader', 'css-loader','sass-loader']},
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {test:/\.js|jsx$/, use:'babel-loader', exclude:/node_modules/}
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.json']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true,
    port: 3000,
    open: true
  }

}