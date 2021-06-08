const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './src/main.js',
  // watch: true,
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "js/bundle.js",
  },
  devServer: {
    // 如果有些资源不是从webpac中得到服务的话就会从这里进行加载
    contentBase: './public',
    hot: true,
    port: 9999,
    open: true,
    compress: true,
    proxy: {
      secure: false,
      changeOrigin: true
    }
  },
  resolve: {
    extensions: ['...', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "js": path.resolve(__dirname, './src/js')
    }
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
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack项目",
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       globOptions: {
    //         ignore: [
    //           "**/index.html"
    //         ]
    //       }
    //     }
    //   ]
    // }),
    new VueLoaderPlugin()
  ]
}