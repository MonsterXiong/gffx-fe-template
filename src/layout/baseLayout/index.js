import { EMIT_TYPE, VIEW_TYPE } from '@/common/constant'
import routesConstant from '@/router/routesConstant'

const MENU_CODE = {
  FE_WORKSPACE: 'fe-workspace',
}

const MENU_ITEM_CODE = {
  HOME_NAV:'home-nav',
  OFFLINE_DOC:'offline-doc',
}

const menuData = [
  {
    menuCode: MENU_CODE.FE_WORKSPACE,
    name: '前端工作台',
    parent: null,
    icon: 'icon-a-ziyuan22',
    type: VIEW_TYPE.VIEW_MODULE,
    disabled: false,
  },
  {
    menuCode: MENU_ITEM_CODE.HOME_NAV,
    name: '首页导航',
    parent: MENU_CODE.FE_WORKSPACE,
    icon: 'icon-shouye',
    type: VIEW_TYPE.VIEW_PAGE,
    eventType: EMIT_TYPE.PAGE,
    eventParams: routesConstant.WELCOME.path,
  },
  {
    menuCode: MENU_ITEM_CODE.OFFLINE_DOC,
    name: '离线文档',
    parent: MENU_CODE.FE_WORKSPACE,
    icon: 'icon-shouye',
    type: VIEW_TYPE.VIEW_PAGE,
    eventType: EMIT_TYPE.PAGE,
    eventParams: routesConstant.OFFLINE_DOC.path,
  },

]

export { MENU_CODE, menuData }
