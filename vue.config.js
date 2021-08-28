module.exports = {
  devServer: {
    proxy: {
      '/owms-server': {
        target: 'http://qa-owms.izehui.com'
      }
    }
  }
}