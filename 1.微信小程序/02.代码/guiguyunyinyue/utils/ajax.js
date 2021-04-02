/*
  封装代码的核心思想
    1.保留公共部分(重复出现的部分)
    2.提取不断变化的部分(通过外部传入)

    封装函数
      1.保留重复出现的代码片段
      2.提取变化的数据,通过形参接受
      3.谁调用谁传入

 */

import config from './config.js';
export default function (url, data={}, method="GET"){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.mpHost + url,
      data,
      method,
      success: (res) => {
        console.log("res", res)
        // result = res;
        resolve(res);
      },
      fail(error) {
        console.log("error", error)
      }
    })
  })  
}