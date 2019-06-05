import pkg from './package'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-blog/'
  }
} : {}

export default {
  mode: 'universal',
  ...routerBase,

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Scss styleResources
  */

  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_bootstrap.scss',
      'assets/scss/_transition.scss'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],

  /*
  ** bootstrapVue
  */
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-0728.firebaseio.com'
  },
  
  // https://nuxtjs.org/api/configuration-transition
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // 根目錄，預設是/
  // rootDir: '/',
  
}
