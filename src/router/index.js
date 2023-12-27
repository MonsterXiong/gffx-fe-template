import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './extend/extendRoutes'
import extendRoutesConstant from './extend/extendRouteConstant'
import baseRoutes from './base/baseRoutes'
import baseRoutesConstant from './base/baseRoutesConstant'

Vue.use(VueRouter)


const currentRoutes = [
  {
    path:'/',
    component: () => import('@/layout/baseLayout/BaseLayout.vue'),
    chidlren:baseRoutes
  },
  ...routes,
]


const router = new VueRouter({
  routes:currentRoutes
})


export const routesConstant = {...extendRoutesConstant,...baseRoutesConstant}

export default router
