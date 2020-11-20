const path = require('path')

module.exports = {
  node: 'development',
  entry: './src/main/index.vue',
  output: {
    path: path.join(__dirname, 'build/js'),
    publicPath: '/build/js',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: './build',
    writeToDisk: true,
    historyApiFallback: true
  }
}