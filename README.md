# multi-skeleton

## 骨架屏实现方案

1. [ElemeFE](https://github.com/ElemeFE)[page](https://github.com/ElemeFE/page-skeleton-webpack-plugin) （2.2k start 已不维护）
    - 饿了么内部的生成骨架页面的工具
    - 结合 Puppeteer 自动生成骨架屏
    - 在预渲染的基础上对页面元素增加、隐藏、修改，提取出 html
    - 只支持 history 模式
2.  [vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)  （0.76k start）
    - 使用图片、svg 或者手动编写骨架屏代码
    - 通过预渲染手动书写的代码或者图片、svg 生成相应的骨架屏
    - 面对视觉设计的改版以及需求的更迭，需要手动维护骨架代码，增加重复劳动
    - 根据路由配置多个 Skeleton
3. [京东dps](https://github.com/famanoder/dps)（0.51k start）
    - 结合 Puppeteer 自动生成骨架屏
    - 遍历页面上的节点，根据制定的规则生成相应区域的颜色块，最终形成页面的骨架屏
4. [Quasar Framework](https://quasar.dev/vue-components/skeleton#Installation) （15k start 组件库） 
    - 通过 Skeleton 组件，需要手动编写代码
    - 需要手动维护骨架代码
5.   [Material Component Framework for Vue](https://github.com/vuetifyjs/vuetify)
    - 基于 v-skeleton-loader 组件的骨架屏方案
    - 多种组件可以选择，灵活度不高，需要手动编写代码
    - 需要手动维护骨架代码

## 单路由骨架屏

- [京东dps](https://github.com/famanoder/dps) 生成骨架屏 html + [vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)  配置单页面

## 多路由骨架屏（最佳实践）

- [京东dps](https://github.com/famanoder/dps) 生成骨架屏 html + [vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)  配置多页面

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
