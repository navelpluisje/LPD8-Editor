const webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: {
      "/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: { "^/.netlify/functions": "" }
      }
    }
  },
  plugins: [ new webpack.DefinePlugin({ "global.GENTLY": false }) ]
};