const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.(css|less|sass)$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [ 'image-webpack-loader', 'url-loader' ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}