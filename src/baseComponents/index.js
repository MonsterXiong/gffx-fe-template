// import Vue from 'vue'

// import BaseIcon from './icon/Icon.vue'
// import BaseContextMenu from './contextMenu/ContextMenu.vue'
// import BaseDialog from './dialog/Dialog.vue'
// import SideTree from './sideTree/SideTree.vue'
// import BaseColorGroupSelect from './colorGroupSelect/ColorGroupSelect.vue'
// import PanelLayout from '@/layout/panelLayout/PanelLayout.vue'
// import BaseCombinedInputNumber from './combinedInputNumber/CombinedInputNumber.vue'

// Vue.component('BaseIcon', BaseIcon)
// Vue.component('BaseContextMenu', BaseContextMenu)
// Vue.component('BaseDialog', BaseDialog)
// Vue.component('BaseSideTree', SideTree)
// Vue.component('PanelLayout', PanelLayout)
// Vue.component('BaseColorGroupSelect', BaseColorGroupSelect)
// Vue.component('BaseCombinedInputNumber', BaseCombinedInputNumber)
const components = {}
const componentsContext = require.context('../baseComponents', true, /\.vue$/)
componentsContext.keys().forEach(key => {
  const componentName = key.split('/')[2].replace('.vue', '');
  const component = componentsContext(key);
  const compName = `Base${component.default?.name || componentName}`
  components[compName] = component.default;
});

export default components
//  使用require.context自动导入组件
// function requireAll(requireContext) {
//     return requireContext.keys().map(requireContext);
// }


    // 创建上下文
    // const componentsContext = require.context('../baseComponents', true, /\index.vue/);
    // 调用函数的keys方法获取到指定目录的下面文件路径
    // componentsContext.keys().forEach((path) => {
    //     const componentName = path.split('/')[1].replace('.vue', '');
    //     // 调用上下文函数，根据path获取到组件函数
    //     const component = componentsContext(path);
    //     // 全局挂载
    //     app.component(componentName, component.default);
    // });
