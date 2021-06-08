const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  // context是上一层目录
  context: path.resolve(__dirname, "../"),
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: "js/bundle.js",
  },
  resolve: {
    extensions: ['...', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "js": path.resolve(__dirname, '../src/js')
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
    new HtmlWebpackPlugin({
      title: "webpack项目",
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ]
}