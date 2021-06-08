const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "js/bundle.js",
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
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     // plugins: [
        //     //   "@babel/plugin-transform-block-scoping",
        //     //   "@babel/plugin-transform-arrow-functions"
        //     // ]
        //     presets: [
        //       "@babel/preset-env"
        //     ]
        //   }
        // }
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
      BASE_URL: "'./'"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    })
  ]
}