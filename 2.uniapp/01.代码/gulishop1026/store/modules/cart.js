import Vue from 'vue';
const state = {
	cartList: [{
			"select":true,
			"count": 1,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1535004,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1535004,
			"sellVolume": 4001,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101761748,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575893634989,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "男式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1636062,
			"displaySkuId": 1636056,
			"productPlace": "",
			"itemSizeTableFlag": false
		},
		{
			"select":false,
			"count":2,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1536001,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1536001,
			"sellVolume": 3634,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101896296,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575894115275,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "女式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1634105,
			"displaySkuId": 1634104,
			"productPlace": "",
			"itemSizeTableFlag": false
		}
	]
};

const mutations = {
	addShopItem(state,good){
		/*
			需求:添加商品到购物车
				1.购物车中没有该商品,将当前商品添加到购物车中
				2.购物中中已有该商品,将对应商品的数量+1
				拆解:
					1.需要知道购物车中是否有该商品
						需要遍历数组,判断内部已有商品和当前商品的id(因为id一般是唯一标识)->find
						注意:find如果找到对象,返回该对象,否则返回undefined
					
		*/
	   let shopItem = state.cartList.find((shopItem)=>{
		return shopItem.id===good.id
	   })
	   if(shopItem){
		   console.log('+1')
		   shopItem.count+=1
	   }else{
		   console.log('=1')
		   // good.count=1;
		   Vue.set(good,'count',1);
		   state.cartList.push(good);
	   }
	   
	   console.log('cartList',state.cartList)
	},
	changeCount(state,{flag,index}){
		/*
			需求:当用户点击商品的+/-号时候,修改对应商品的数量
			如果是+,就count+1,
			如果是-,就count-1
				如果当前数量为1,在触发删减,删除商品
		*/
	   let shopItem = state.cartList[index];
	   if(flag){
		   shopItem.count+=1;
	   }else{
		   if(shopItem.count===1){
			   state.cartList.splice(index,1);
		   }else{
			shopItem.count-=1;
		   }
	   }
	   
	},
	changeSelect(state,index){
		/*
			需求:当用户点击商品的选中按钮,切换对应商品的选中状态
		*/ 
	   let shopItem = state.cartList[index];
	   shopItem.select=!shopItem.select;
	},
	changeAllSelect(state,select){
		/*
			需求:当用户点击全选按钮,切换所有商品的选中状态,变成与当前全选按钮相反一样
		*/ 
	   state.cartList.forEach((shopItem)=>{
		   shopItem.select=select;
		   // return 123;
	   })
	   // console.log('result',result)
	}
};
const actions = {};
const getters = {
	isAllSelected(){
		/*
			需求:
				1.当购物车中所有的商品都是选中状态,当前全选按钮也变为选中状态
				2.当购物车中有一个以上的商品处于未选中状态,当前全选按钮也变为未选中状态
				3.当购物车中没有商品,当前全选按钮变为未选中状态
				4.返回值类型:布尔值
		*/
	   if(!state.cartList.length)return false;
	   let result = state.cartList.every((shopItem)=>{
		   return shopItem.select
	   })
		return result;
	}
};
export default {
	state,
	mutations,
	actions,
	getters
}
