const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/main.ts',
  output: {
    path: path.join(__dirname, 'build/js'),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.sass', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          allowTsInNodeModules: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true
              }
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader'
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './build',
    writeToDisk: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './build/index.html'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}
