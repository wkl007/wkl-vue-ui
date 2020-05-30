// 导入单个组件
// eslint-disable-next-line import/no-named-default
import { default as Button } from './button'

// eslint-disable-next-line import/no-named-default
import { default as version } from './version'

// 以数组的结构保存组件，便于遍历
const components = [
  Button
]

// 定义 install 方法
const install = function (Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  version
}

export default {
  version,
  install
}
