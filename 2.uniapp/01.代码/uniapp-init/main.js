import Vue from 'vue'
import App from './App'

// 关闭Vue控制台提示
Vue.config.productionTip = false

// 声明App组件代表整个小程序
//mp->mini program  type=>类型
App.mpType = 'app'

const app = new Vue({
    ...App
	
		// onLaunch: function() {
		// 	console.log('App Launch')
		// },
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }
})

// App({
		// onLaunch: function() {
		// 	console.log('App Launch')
		// },
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }
// })
app.$mount()
