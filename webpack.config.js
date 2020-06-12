// eslint-disable-next-line no-unused-vars
const dotEnv = require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtraxtPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;
const nodeEnv = mode === 'development';

module.exports = {
  entry: './src/index.js',
  mode,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [{
          loader: MiniCssExtraxtPlugin.loader,
        },
        'css-loader',
        'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: nodeEnv ? 'assets/[name].[ext]' : 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtraxtPlugin({
      filename: nodeEnv ? 'assets/[name].css' : 'assets/[hash].css',
    }),
  ],

};
