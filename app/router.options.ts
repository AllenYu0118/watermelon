import type { RouterOptions } from '@nuxt/schema'

export default <RouterOptions>{
  routes: (_route) => {
    const routes = _route.concat([
      {
        name: 'detail',
        path: '/:type(rent|sale)/:id',
        component: () => import('@/pages/rent/[id].vue'),
      },
    ])

    return routes
  }
}
