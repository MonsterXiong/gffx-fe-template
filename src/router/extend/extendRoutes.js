import extendRouteConstant from './extendRouteConstant'
const routes = [
  {
    ...extendRouteConstant.WELCOME,
    component: () => import('@/pages/welcome/Welcome.vue'),
  },
  {
    ...extendRouteConstant.OFFLINE_DOC,
    component: () => import('@/pages/offlineDoc/OfflineDoc.vue'),
  },
]

export default routes
