// webpack.config.js
const path = require('path');

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // 出口文件夹名称
    path: path.resolve(__dirname, './build'),
    // 出口文件名称
    filename: "bundle.js"
  }
}