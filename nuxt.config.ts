// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'pages:extend' (pages) {
      pages.push({
        name: 'detail',
        path: '/:type(rent|sale)/:id',
        file: '@/pages/rent/[id].vue',
      })
    }
  }

})
