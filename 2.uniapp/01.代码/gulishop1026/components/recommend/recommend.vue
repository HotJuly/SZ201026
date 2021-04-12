<template>
	<view class="recommendContainer">
		<swiper class="bannerSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="bannerItem" src="../../static/images/index/1.webp" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="bannerItem" src="../../static/images/index/2.webp" mode=""></image>
					</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="bannerItem" src="../../static/images/index/3.webp" mode=""></image>
					</view>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList区域,宣传语 -->
		<view class="policyDescList">
			<view class="policyDescItem" v-for="item in indexData.policyDescList" :key="item.desc">
				<image class="policyDescImg" :src="item.icon" mode=""></image>
				<text class="policyDescTitle">{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 商城导航 -->
		<view class="kingKongList">
			<view class="kingKongItem"  v-for="item in indexData.kingKongModule.kingKongList" :key="item.picUrl">
				<image class="kingKongImg" :src="item.picUrl" mode=""></image>
				<text class="kingKongTitle">{{item.text}}</text>
			</view>
		</view>
		
		<!-- 商品导购区域 -->
		<Categorys v-for="category in indexData.categoryModule" :categoryObj="category" :key="category.titlePicUrl"/>
	</view>
</template>

<script>
	import ajax from '../../utils/ajax.js';
	import Categorys from '../../components/categorys/categorys'
	export default{
		data(){
			return {};
		},
		props:["indexData"],
		created(){},
		methods:{},
		components:{
			Categorys
		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		.bannerSwiper
			.swiper-item
				width 100%
				height 100%
				.bannerItem
					width 100%
					height 100%
		.policyDescList
			display flex
			justify-content space-around
			.policyDescItem
				.policyDescImg
					width 32upx
					height 32upx
					vertical-align middle
				.policyDescTitle
					font-size 24upx
					vertical-align middle
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				.kingKongImg
					width 110upx
					height 110upx
				.kingKongTitle
					font-size 24upx
					// display block
		
</style>
