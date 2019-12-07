const path = require('path');

const fullDir = path.join(__dirname, 'history-mode');

module.exports = {
  mode: 'development',
  entry: {
    'history-mode': path.join(fullDir, 'app.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: 'build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@eatthatpie/react-router': path.join(__dirname, '../src')
    },
    extensions: ['.js', '.jsx', '.json']
  }
};
