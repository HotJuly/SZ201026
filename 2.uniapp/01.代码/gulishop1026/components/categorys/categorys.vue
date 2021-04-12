<template>
	<view class="categorysContainer">
<!-- 		<image class="titleImg" src="../../static/images/index/1.webp" mode=""></image>
		<scroll-view class="categoryScroll" scroll-x="true" >
			<view class="categoryItem" >
				<image class="itemImg" src="../../static/images/dazuo.jpeg" mode=""></image>
				<view class="itemText">
					大佐天下第一大佐天下第一大佐天下第一大佐天下第一大佐天下第一
				</view>
			</view> -->
		<image class="titleImg" :src="categoryObj.titlePicUrl" mode=""></image>
		<scroll-view class="categoryScroll" scroll-x="true" >
			<view class="categoryItem" v-for="item in categoryObj.itemList" :key="item.name">
				<image class="itemImg" :src="item.listPicUrl" mode=""></image>
				<view class="itemText">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import ajax from '../../utils/ajax.js';
	export default{
		data(){
			return {};
		},
		props:['categoryObj'],
		created(){
			//$attrs用于接收父组件传递下来的标签属性,并且当前组件没有使用props接收
			// console.log(this.$attrs)
		},
		methods:{}
	}
</script>

<style lang="stylus">
	.categorysContainer
			padding 40upx 0
			.titleImg
				width 100%
				height 370upx
			.categoryScroll
				white-space nowrap
				.categoryItem
					display inline-block
					width 200upx
					margin 0 20upx
					.itemImg
						width 200upx
						height  200upx
						background #eee
					.itemText
						height 60upx
						font-size 24upx
						overflow hidden
						display -webkit-box
						-webkit-line-clamp 2
						-webkit-box-orient vertical
						white-space pre-wrap
</style>
