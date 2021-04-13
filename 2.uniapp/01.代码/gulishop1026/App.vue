<script>
	import ajax from './utils/ajax.js';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.login({
				success:async ({code})=>{
					// console.log('code',code)
					let openid = await ajax('/getOpenId',{code});
					uni.setStorageSync('token',openid);
				}
			})
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	@import url('/static/iconfont/iconfont.styl')
	page{
		height:100%;
	}
</style>
