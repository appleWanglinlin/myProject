module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '泽汇海外仓'
        return args
      })
  },
  devServer: {
    proxy: {
      '/owms-server': {
        target: 'http://qa-owms.izehui.com'
      }
    }
  }
}