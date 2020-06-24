const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const skeletonRouter = require('./src/skeleton/router')

const commonPlugins = [
  new SkeletonWebpackPlugin({
    webpackConfig: {
      entry: {
        app: path.join(__dirname, './src/skeleton'),
      },
    },
    quiet: true,
    minimize: true,
    router: skeletonRouter,
  }),
]

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: commonPlugins
  }
}
