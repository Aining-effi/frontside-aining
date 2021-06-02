//
var path = require('path')
module.exports = {
  lintOnSave: true,
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8848
  }
}
