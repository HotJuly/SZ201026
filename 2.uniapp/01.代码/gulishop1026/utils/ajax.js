import config from './config.js';

console.log('uni.getSystemInfoSync()',uni.getSystemInfoSync())

// 通过APIuni.getSystemInfoSync()可以判断当前运行环境
let {platform} = uni.getSystemInfoSync();
let baseUrl;
if(platform==="devtools"){
	// 说明当前是小程序上运行
	baseUrl= config.mpHost;
}else if(platform==="ios"){
	// 说明当前是在apple手机的浏览器上
	baseUrl= config.h5Host;
}

export default function(url,data={},method="GET"){
	return new Promise((resolve)=>{
		uni.request({
			url:baseUrl + url,
			data,
			method,
			success:(res)=>{
				// res是响应报文对象,数据在res.data中(响应体)
				resolve(res.data);
			}
		})
	})
}