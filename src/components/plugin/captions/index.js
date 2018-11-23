import ZHerder from './captions.vue'

// const Loading = {}
// // 注册Loading
// Loading.install = function (Vue) {
//     // 生成一个Vue的子类
//     // 同时这个子类也就是组件
//     Vue.prototype.$loading = {}
//     Vue.prototype.$loading.show = (config) => {
//         const LoadingConstructor = Vue.extend(LoadingComponent)
//         // 生成一个该子类的实例
//         const instance = new LoadingConstructor()
//         // 并将此div加入全局挂载点内部
//         document.body.appendChild(instance.$mount().$el)
//         if (config) {
//             instance.size = config.size
//             instance.text = config.text
//         }
//     }
//     Vue.prototype.$loading.hide = () => {
//         document.body.removeChild(document.querySelector('#custom-loading'))
//     }
// }

export default {
    install:function(Vue){
        Vue.component("zHerder",ZHerder)
    }
}