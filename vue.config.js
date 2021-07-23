module.exports = {
  devServer: {
    proxy: {
      // '/admin-api': {
      //   target: 'http://laravel.admin.com/'
      // },
      '/api': {
        target: 'http://laravel.com/',
        changeOrigin: true,
        // logLevel: 'debug'
      }
    }
  }
}