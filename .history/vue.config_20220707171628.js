const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://lianghj.top:8888/api/private/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
