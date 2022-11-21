const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      chainWebpack: config => config.optimization.minimize(false)
    }
  }
}
