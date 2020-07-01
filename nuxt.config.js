// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path');

export default {
    srcDir: path.resolve(__dirname, 'src'),

    /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
    mode: 'universal',
    /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
  ** Global CSS
  */
    css: [
        'normalize.css',
        '~/assets/scss/app'
    ],
    styleResources: {
        scss: ['~/assets/scss/helpers/index.scss']
    },
    /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
    plugins: [
    ],
    /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
    components: true,
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources'
    ],
    /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
    axios: {},
    /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        extend (config) {
            config.resolve.extensions = ['.js', '.json', '.vue', '.scss'];
            config.resolve.alias['@scss'] = path.resolve(__dirname, 'src/assets/scss');
        }
    }
};
