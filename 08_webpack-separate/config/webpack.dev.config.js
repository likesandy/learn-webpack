const { merge } = require('webpack-merge');
const publicConfig = require('./webpack.public.config')

module.exports = merge(publicConfig, {
  mode: "development",
  devtool: 'source-map',
  devServer: {
    contentBase: '../public',
    hot: true,
    port: 9999,
    open: true,
    compress: true,
    proxy: {
      secure: false,
      changeOrigin: true
    }
  },
})