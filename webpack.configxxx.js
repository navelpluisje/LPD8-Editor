const webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: {
      "http://localhost:3000/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: { "^/.netlify/functions": "" }
      }
    }
  },
  plugins: [ new webpack.DefinePlugin({ "global.GENTLY": false }) ]
};