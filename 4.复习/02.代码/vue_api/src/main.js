import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//3.项目上线之后,如何收集用户出现的报错(错误边界)
// window.onerror=function(e){
//   console.log(e)
//   // 发送ajax请求,交给服务器,服务器统一接收,最终将bug信息交给前端,前端再处理
// }

// Vue.config.errorHandler = function (err, vm, info) {
//   console.log('errorHandler',err, vm, info)
// }



// 2.设置Vue项目是否允许使用开发者工具查看组件状态
// Vue.config.devtools=true;

// 1.用于同一修改所有配置对象中的配置属性
// Vue.config.optionMergeStrategies._a=function(parent,child,vm){
//   console.log('_a',parent,child,vm)
//   return child + 1;
// }

new Vue({
  render: h => h(App),
}).$mount('#app')
