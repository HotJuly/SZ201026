<template>
	<view class="indexContainer">
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
</template>

<script>
	export default {
		data() {
			return {
				title:'Hello'
			}
		},
		onLoad(){

		},
		methods:{

		}
	}
</script>

<style lang="stylus">
	@import url('../../static/iconfont/iconfont.styl');
	.indexContainer
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
</style>
