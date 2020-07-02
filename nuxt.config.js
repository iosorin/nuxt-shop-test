// eslint-disable-next-line nuxt/no-cjs-in-config
const path = require('path');

export default {
    srcDir: path.resolve(__dirname, 'src'),

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

    loading: { color: '#000000' },

    css: [
        'normalize.css',
        '~/assets/scss/app'
    ],

    styleResources: {
        scss: ['~/assets/scss/utils/index.scss']
    },

    plugins: [
        '~/plugins/$utils',
        '~/plugins/components',
        '~/service/firebase'
    ],

    components: true,

    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],

    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/style-resources'
    ],

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
