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

//API组件体验
// import HelloWorld from './components/HelloWorld.vue';
// // 生成组件构造函数
// let HelloComponent = Vue.extend(HelloWorld);
let HelloComponent = Vue.extend({
  template:"<div>{{a}}</div>",
  data(){
    return {
      a:3
    }
  }
});
//生成组件实例对象
let helloInstance = new HelloComponent();
//生成真实DOM
helloInstance=helloInstance.$mount();
// 让所有组件都能看到hello组件
Vue.prototype.$helloInstance = helloInstance;
document.body.appendChild(helloInstance.$el);
console.log(helloInstance)

// 用于统一处理生命周期中所需要做的事情
// Vue.mixin({
//   mounted(){
//     console.log(this.$options.name)
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
