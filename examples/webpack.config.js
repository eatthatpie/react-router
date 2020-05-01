const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'history-mode': path.join(path.join(__dirname, 'history-mode'), 'app.js'),
    'route-params': path.join(path.join(__dirname, 'route-params'), 'app.js'),
    'transition': path.join(path.join(__dirname, 'transition'), 'app.js')
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
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'best-react-router$': path.join(__dirname, '../src/index'),
      "@": path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  }
};
