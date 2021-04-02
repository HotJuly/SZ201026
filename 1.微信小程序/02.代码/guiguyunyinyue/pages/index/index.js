// pages/index/index.js
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommendList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    /*
      1.在哪发
        onLoad发送
      2.怎么发
        wx.request(Object object)
      3.往哪发
        根据接口文档发送,注意一定要测试
     */
    // console.log(1)
    
    // let bannerData = await ajax('/banner',{type:2});
    // this.setData({
    //   banners: bannerData.data.banners
    // })
    // // console.log('result',result)

    // let recommendData = await ajax('/personalized');
    // this.setData({
    //   recommendList: recommendData.data.result
    // })

    ajax('/banner', { type: 2 })
      .then((bannerData)=>{
        this.setData({
          banners: bannerData.data.banners
        })
    })

    ajax('/personalized')
      .then((recommendData) => {
        this.setData({
          recommendList: recommendData.data.result
        })
    })


    // wx.request({
    //   url: "http://localhost:3000/personalized",
    //   success: (res) => {
    //     // console.log("res", res)
    //     // let { data: { banners } } = res;
    //     // let {}
    //     // console.log(data,banners)
    //     this.setData({
    //       recommendList:res.data.result
    //     })
    //   },
    //   fail(error) {
    //     console.log("error", error)
    //   }
    // })
    // console.log(2)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})