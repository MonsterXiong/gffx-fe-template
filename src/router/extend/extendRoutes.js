import routesConstant from './extendRouteConstant'
const routes = [
  {
    ...routesConstant.PROJECT,
    component: () => import('@/pages/project/Project.vue'),
  },
]

export default routes
