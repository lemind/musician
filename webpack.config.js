const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'static/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: ['babel-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'autoprefixer-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: 'static/img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: 'static/fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.html$/,
        loader: [
          'html-loader'
        ]
      },
      {
        test: /\.hbs$/,
        loader: ['handlebars-loader']
      }
    ],
},
plugins: [
    new ExtractTextPlugin('static/css/styles.css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: ["dist"],
      files: ["src/*.*"]
    }),
    new HtmlWebpackPlugin({
      //inject: false,
      template: './index.hbs',
      filename: './index.html',
      hash: true
    }), 
    new CopyWebpackPlugin([
      {from: 'static/img/', to: 'static/img/'},
      {from: 'api/', to: 'api/'}
    ],
    {copyUnmodified: true})
  ]
}
