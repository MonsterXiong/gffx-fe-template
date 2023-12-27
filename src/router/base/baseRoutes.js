import baseRoutesConstant from './baseRoutesConstant'
const baseRoutes = [
  {
    ...baseRoutesConstant.HOME,
    redirect:baseRoutesConstant.WELCOME.path,
  },
  {
    ...baseRoutesConstant.WELCOME,
    component: () => import('@/pages/welcome/Welcome.vue'),
  },
]

export default baseRoutes



