const commonRouteConstant = {
  HOME: {
    path: '/',
    name: 'Home',
  },
  REDIRECT: {
    path: '/redirect',
    name: 'Redirect',
  },
  LOGIN: {
    path: '/login',
    name: 'login',
  },
  // 404
  NOT_FOUNT: {
    path: '*',
    name: 'notFound',
  },
}

const extendRouteConstant = {
  ...commonRouteConstant,
  // 项目管理
  WELCOME: {
    path: '/base/welcome',
    name: 'Welcome',
  },
  OFFLINE_DOC: {
    path: '/offlineDoc',
    name: 'OfflineDoc',
  },
}



export default extendRouteConstant
