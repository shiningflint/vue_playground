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
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
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
