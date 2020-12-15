const path = require('path')
const isCDN = process.env.VUE_APP_CDN = 'ON'
const cdn = {
  css: [],
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
    'https://cdn.jsdelivr.net/npm/vuex@3.3.0/dist/vuex.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
    'https://cdn.jsdelivr.net/npm/qs@6.9.3/dist/qs.js'
  ]
}
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  qs: 'Qs'
}

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      postcss: {
          plugins: [
              require('autoprefixer'),
              require('postcss-px-to-viewport')({
                  'unitToConvert': 'px',
                  'viewportWidth': 750,
                  'unitPrecision': 3,
                  'viewportUnit': 'vw',
                  'selectorBlackList': [
                      'ignore',
                      'van',
                      'mescroll'
                  ],
                  'minPixelValue': 1,
                  'mediaQuery': false
              })
          ]
      }
    }
  },
  configureWebpack: config => {
    if (isCDN) {
      config.externals = externals
    }
  },
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      fix: true
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item.use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            './src/assets/styles/resources/*.scss'
          ]
        })
        .end()
    })
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE
        if (isCDN) {
          args[0].cdn = cdn
        }
        return args
      })
  }
}
