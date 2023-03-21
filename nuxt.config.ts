// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'pages:extend' (pages) {
      console.log('pages: ', pages);
      pages.push({
        name: 'detail',
        path: '/:type(rent|sale)/:id',
        file: '@/pages/rent/[id].vue',
      })

    }
  }

})
