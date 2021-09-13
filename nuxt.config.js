import { resolve } from 'path'
export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'trello-clone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  alias: {
    'images': resolve(__dirname, './assets/images'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  router: {
    middleware: ['auth']
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBFdP7aXfyTNpiqewglEye78VonrVO3U-Q",
          authDomain: "trello-clone-nuxt.firebaseapp.com",
          projectId: "trello-clone-nuxt",
          storageBucket: "trello-clone-nuxt.appspot.com",
          messagingSenderId: "834143514212",
          appId: "1:834143514212:web:9d7623b1dcf46dcaf0b971"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              // onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          },
          firestore: true,
          storage: true
        }
      }
    ],
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
