const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
const skeletonRouter = require('./src/skeleton/router');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/skeleton'),
          },
        },
        quiet: true,
        minimize: true,
        router: skeletonRouter,
      })
    ],
    optimization: {
      splitChunks: {
        minSize: 30000,
        maxSize: 102400,
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'initial',
            minChunks: 2, // 模块被引用次数
            priority: -20, // 优先级
            reuseExistingChunk: true, // 重用已拆分模块
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            minChunks: 2,
            priority: -10,
            reuseExistingChunk: true,
          },
        },
      },
    },
  }
}
