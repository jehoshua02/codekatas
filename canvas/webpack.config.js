var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var NotifierPlugin = require('webpack-notifier');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ["node_modules", "./src"]
  },
  plugins: [
    new HtmlPlugin({
      title: 'React App',
      favicon: './src/favicon.png'
    }),
    new NotifierPlugin({
      alwaysNotify: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['./build']}
    })
  ]
};
