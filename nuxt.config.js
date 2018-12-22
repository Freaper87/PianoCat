const pkg = require('./package')
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import axios from 'axios'
require('dotenv').config()

module.exports = {
  mode: 'universal',
  base: '/dist/',
  /*
  ** Headers of the page
  */
  env: {
    key: process.env.VUE_APP_KEY,
    url: process.env.VUE_API_URL
  },
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'fb:admins', content: '100002845722084' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,600|Material+Icons|Pacifico|Raleway'}
    ]
  },
  

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: '#77d5fb'
  },
  manifest: {
    name: "PianoCat",
    short_name: "PianoCat",
    theme_color: "#303c74"
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-tag-manager', { 
      id: 'GTM-PLV8DF8',
      pageTracking: true
      }
    ]
  ],

  generate: {
    routes: function() {
      return axios.get(process.env.VUE_API_URL + '/covers/')
      .then((res) => {
          return res.data.map((myslug) => {
            return '/' + myslug.slug
          })
      })
    }
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: "1y",
      setHeaders(res, path) {
        if (path.includes("sw.js")) {
          res.setHeader("Cache-Control", `public, max-age=${15 * 60}`)
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // publicPath: 'public/',
    /*
    ** You can extend webpack config here
    */
    // analyze: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
      config.plugins.push(
        new VuetifyLoaderPlugin()
      )
    },

    transpile: [/^vuetify/]
  }
}
