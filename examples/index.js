const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

const { rewrite } = require('./util');
const express = require('express');
const app = express();

app.use(middleware(compiler, { publicPath: '/build/' }));

app.use(rewrite('/history-mode/:segment', '/history-mode/index.html'));
app.use(rewrite('/route-params/:segment', '/route-params/index.html'));
app.use(rewrite('/', 'index.html'));

app.use(express.static(__dirname));

app.listen(3000, function() {
  console.log('Examples running on http://localhost:3000');
});
