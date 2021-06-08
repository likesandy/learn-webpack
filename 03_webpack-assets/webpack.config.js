const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "bundle.js",
    // assetModuleFilename: "img/[name]_[hash:6][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          "postcss-loader",
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: {
      //     loader: "file-loader",
      //     // loader: 'url-loader',
      //     // 额外配置
      //     options: {
      //       // outputPath: "img", // 打包到指定文件夹
      //       name: "img/[name]_[hash:6].[ext]" // 打包后的文件名称
      //     }
      //   }
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       name: "img/[name]_[hash:6].[ext]",
      //       limit: 20 * 1024  // 限制:比20kb小的图片转换成url
      //     }
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]"
        }
      }
    ]
  }
}