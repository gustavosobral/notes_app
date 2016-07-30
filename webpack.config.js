var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'bin')
  },
  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.template.ejs')
    })
  ]
};
