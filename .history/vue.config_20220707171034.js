const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const webpack = require('webpack')

module.exports = defineConfig(
  {
    transpileDependencies: true,
    lintOnSave: false
  }
)

module.exports = {
  devServer: {
    https: false,
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
