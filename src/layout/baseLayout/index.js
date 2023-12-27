// import { routesConstant } from '@/router/routeConstant'
// import EventTypes from '@/common/eventTypes'

const MENU_CODE = {
  FIRST_MENU: 'jgtxyzzh',
  SECOND_MENU: 'txnlyzzh',
  THIRD_MENU: 'nljtyzzh',
}

const EVENT_TYPE = {
  DIALOG: 'dialog',
  EVENT: 'event',
  PAGE: 'page',
}

const MENU_TYPE = {
  MENU: 'menu',
  SUB_MENU: 'subMenu',
}

const menuData = [
  {
    id: MENU_CODE.FIRST_MENU,
    title: '精干体系构建',
    icon: 'icon-a-ziyuan22',
    type: MENU_TYPE.MENU,
  },
  {
    id: MENU_CODE.SECOND_MENU,
    title: '体系能力验证综合',
    icon: 'icon-tongji-copy-copy',
    type: MENU_TYPE.MENU,
  },
  {
    id: MENU_CODE.THIRD_MENU,
    title: '能力阶梯验证综合',
    icon: 'icon-fenxi',
    type: MENU_TYPE.MENU,
  },
  {
    parentId: MENU_CODE.FIRST_MENU,
    title: '首页',
    icon: 'icon-shouye',
    eventType: EVENT_TYPE.PAGE,
    // eventParams: routesConstant.SYSTEM_STRUCT.path,
    type: MENU_TYPE.SUB_MENU,
  },

]

export { MENU_CODE, EVENT_TYPE, MENU_TYPE, menuData }
