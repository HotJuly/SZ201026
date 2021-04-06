/*
  封装代码的核心思想
    1.保留公共部分(重复出现的部分)
    2.提取不断变化的部分(通过外部传入)

    封装函数
      1.保留重复出现的代码片段
      2.提取变化的数据,通过形参接收
      3.谁调用谁传入

    封装组件
      1.保留重复出现的代码片段(template+style+部分js)
      2.提取变化的数据,通过标签属性props接收
      3.谁使用谁传入

 */

import config from './config.js';
export default function (url, data={}, method="GET"){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.mpHost + url,
      data,
      method,
      header:{
        cookie:wx.getStorageSync("cookie")
      },
      success: (res) => {
        // console.log("res", res);
        // result = res;
        if(data.isLogin){
          //只有登录接口才能进来保存cookie
          //思路一:通过url进行判断,可行,但是不稳妥
          let cookie = res.cookies.find((item)=>{
            return item.startsWith('MUSIC_U');
          });
          wx.setStorageSync('cookie',cookie)
        }
        resolve(res.data);
      },
      fail(error) {
        console.log("error", error);
        reject(error)
      }
    })
  })  
}