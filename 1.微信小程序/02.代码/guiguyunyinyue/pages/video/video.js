// pages/video/video.js
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    navId:null
  },

  changeId(event){
    /*
      自定义属性数据值可以为任意类型,你给他什么,他返回给你就是什么
      标签属性数据值只能是字符串,你给他什么,他返回的都是字符串
     */
    console.log('changeId',event.currentTarget)
    // let { id } = event.currentTarget.dataset;
    let { id } = event.currentTarget;
    this.setData({
      navId:id*1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:async function () {
    //步骤一:请求获取标签列表数据
    let navListData = await ajax('/video/group/list');
    // console.log('navListData',navListData.data)
    this.setData({
      navList: navListData.data.slice(0,14),
      navId: navListData.data[0].id
    })

    let videoListData = await ajax('/video/group', { id : this.data.navId});
    console.log(videoListData)
    this.setData({
      videoList: videoListData.datas
    })
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