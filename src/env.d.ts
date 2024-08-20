/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    view: typeof import('uni-app').view
    text: typeof import('uni-app').text
    // 继续添加其他你可能用到的组件...
  }
}
