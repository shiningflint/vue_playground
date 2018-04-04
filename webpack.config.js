const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vuetest.min.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, exclude: /node_modules/, loader: "vue-loader" }
    ]
  },
  resolve: {
    alias: {// make import Vue from 'vue' directs to the vue.esm.js
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  mode: 'development'
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config
