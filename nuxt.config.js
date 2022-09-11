export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tommy O'Peters",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        async: true,
      },
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        defer: true,
      },
      {
        src: 'https://unpkg.com/isotope-layout@3.0.6/dist/isotope.pkgd.min.js',
        defer: true,
      },
      {
        src: 'https://unpkg.com/masonry-layout@4.2.2/dist/masonry.pkgd.min.js',
        defer: true,
      },
      {
        src: 'https://kit.fontawesome.com/8509b10269.js',
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/bootstrap.min.css', '~/assets/sass/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueTypewriter.js', mode: 'client' },
    // { src: '~/plugins/Isotope.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0',
  },

  // For Generating.
  target: 'static',
}
