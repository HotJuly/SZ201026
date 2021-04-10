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
					<image src="../../static/images/index/2.webp" mode=""></image>
					</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/index/3.webp" mode=""></image>
					</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import ajax from '../../utils/ajax.js';
	export default{
		data(){
			return {};
		},
		created(){},
		methods:{}
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
</style>
