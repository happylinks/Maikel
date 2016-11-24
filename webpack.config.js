const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      'app',
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.ejs$/, loader: 'ejs-loader' },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash',
      $: "jquery",
      jQuery: "jquery",
      // Backbone: "backbone",
      // Marionette: "backbone.marionette",
    })
  ]
}
