const baseRoutesConstant = {

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
  // 项目管理
  WELCOME: {
    path: '/base/welcome',
    name: 'Welcome',
  },
}

export default baseRoutesConstant
