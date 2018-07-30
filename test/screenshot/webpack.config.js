const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const {importer} = require('../../packages/webpack.util');
const outputPath = 'app';

module.exports = function() {
  return {
    entry: ['babel-polyfill', `./test/screenshot/index.js`],
    output: {
      filename: outputPath + '.js',
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {compact: true},
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            }, {
              loader: 'sass-loader',
              options: {importer},
            },
          ],
        }),
      }],
    },
    plugins: [
      new ExtractTextPlugin(outputPath + '.css'),
      new OptimizeCssAssetsPlugin(),
    ],
  };
};
