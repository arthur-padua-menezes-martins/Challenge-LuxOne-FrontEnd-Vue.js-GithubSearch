const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.html',
  output: {
    path: path.join(__dirname, 'build/js'),
    publicPath: '/build/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'scss-loader'
      }]
    }]
  },
  devServer: {
    contentBase: './build',
    writeToDisk: true,
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
