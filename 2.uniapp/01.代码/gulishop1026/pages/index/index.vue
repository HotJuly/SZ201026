<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="searchContainer">
				<view class="iconfont icon-sousuo"></view>
				<input 
				type="text" 
				value="" 
				class="search" 
				placeholder="搜索商品"
				placeholder-class="placeholder"
				/>
			</view>
			<button class="username">七月</button>
		</view>
		<scroll-view class="navScroll"
		 scroll-x 
		v-if="indexData.kingKongModule">
			<view class="navItem active">
				推荐
			</view>
			<view class="navItem"
			v-for="item in indexData.kingKongModule.kingKongList"
			:key="item.L1Id">
				{{item.text}}
			</view>
		</scroll-view>
		<Recommend/>
	</view>
</template>

<script>
	import ajax  from "../../utils/ajax.js";
	import Recommend from '../../components/recommend/recommend.vue';
	export default {
		data() {
			return {
				indexData:{}
			}
		},
		// onLoad(){
		// /*
		// 	1.在哪发
		// 		小程序 onLoad(相当于Vue中的created)
		// 		Vue mounted或者created
		// 	2.怎么发
			// uni.request(OBJECT)
		// 	3.往哪发
		
		// */
		// 	console.log('onLoad')
		// },
		async created(){
			// console.log('created')
			// uni.request({
			// 	url:"http://localhost:3001/getIndexData",
			// 	success:(res)=>{
			// 		// console.log(res.data)
			// 		this.indexData = res.data;
			// 		// 不允许
			// 		// this.setData({
			// 		// 	indexData : res.data
			// 		// })
			// 	}
			// });
			
			let indexData = await ajax('/getIndexData');
			// console.log('indexData',indexData)
			this.indexData=indexData;
		},
		// mounted(){
		// 	console.log('mounted')
		// },
		methods:{

		},
		components:{
			Recommend
		}
	}
</script>

<style lang="stylus">
	// shift+tab可以实现向前缩进
	@import url('../../static/iconfont/iconfont.styl');
	.indexContainer
		.header
			display flex
			align-items  center
			padding-top 20upx
			.logo
				width 116upx
				height 40upx
				margin 0 20upx
			.searchContainer
				position relative
				background pink
				height 60upx
				border-radius  15upx
				.iconfont
					position absolute
					top 50%
					left 20upx
					transform translateY(-50%)
				.search
					padding-left 60upx
					.placeholder
						text-align center
						font-size 24upx
						text-indent -60upx
			.username
				height 60upx
				width 128upx
				font-size 24upx
				margin 0 20upx
				color red
		.navScroll
			// display flex
			white-space nowrap
			.navItem
				position relative
				display inline-block
				font-size 28upx
				width 140upx
				height 80upx
				text-align center
				line-height 80upx
				&.active::after
					content ""
					position absolute
					bottom 0 
					left 0
					// display block
					width 100%
					height 4upx
					background red
</style>
