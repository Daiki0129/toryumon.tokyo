const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    // htmlAttrs: {
    //   prefix: 'og: http://ogp.me/ns#'
    // },
    title: pkg.description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:site_name', property: 'og:site_name', content: pkg.description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://toryumontokyo.com/' },
      { hid: 'og:title', property: 'og:title', content: pkg.description },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:image', property: 'og:image', content: 'https://toryumontokyo.com/T_tokyo_image_ogp.jpg' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'https://toryumontokyo.com/T_tokyo_image_ogp.jpg'}
    ],
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'X-UA-Compatible', content: 'IE=edge' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no' },
    //   { hid: 'description', name: 'description', content: pkg.description },
    //   { name: 'author', content: 'Creative Tim, Cristi Jora' }
    // ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  transition: {
    name: 'fade',
    mode: 'out-in',
    duration: 250
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/argon/vendor/nucleo/css/nucleo.css',
    '~assets/argon/vendor/font-awesome/css/font-awesome.css',
    '~assets/argon/scss/argon.scss',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/argon/argon-kit'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    [
      'bootstrap-vue/nuxt',
      {
        css: false
      }
    ],
    '@nuxtjs/pwa'
  ],
  server: {
    port: 3000, // デフォルト: 3000 (https://ja.nuxtjs.org/faq/host-port/)
    host: '0.0.0.0', // デフォルト: localhost
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
  }
}
