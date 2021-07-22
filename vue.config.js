module.exports = {
  devServer: {
    proxy: {
      '/server': {
        target: 'http://qa-els.izehui.com/'
      }
    }
  }
}