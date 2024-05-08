// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    https: {
      key: "./localhost-key.pem",
      cert: "./localhost.pem",
    },
  },

  ssr: false,
  app: {
    head: {
      meta: [
        {
          // name: "google-site-verification",
          // content: process.env.GOOGLE_SITE_VERIFICATION,
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  nitro: {
    plugins: ["~/server/index.js"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "",
      // connectUrl: process.env.CONNECT_URL,
      // google_client_id: process.env.GOOGLE_CLIENT_ID
    },
  },
  modules: ["@pinia/nuxt"],
});
