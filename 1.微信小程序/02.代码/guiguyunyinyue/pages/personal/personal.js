// pages/personal/personal.js
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveDistance:0,
    moveTransition:"",
    userInfo:{}
  },

  toLogin(){
    // 如果用户已经登录,就不进行跳转
    if (this.data.userInfo.nickname)return;

    //跳转到login页面
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  handleTouchStart(event){
    //touches用于收集屏幕上所有的手指
    //changedTouches用于收集屏幕上变化的手指
    //获取当前手指位置:event.touches[0].clientY
    this.startY = event.touches[0].clientY;
    this.setData({
      moveTransition: ""
    })
    // console.log('handleTouchStart', startY)
  },
  handleTouchMove(event) {
    let moveY = event.touches[0].clientY;
    // console.log('handleTouchMove', moveY);
    let moveDistance = moveY - this.startY;
    // console.log('moveDistance', moveDistance);

    // 边界值限制,限制不能往上走,往下最多到80rpx
    if(moveDistance<=0||moveDistance>80)return ;
    this.setData({
      moveDistance
    })
  },
  handleTouchEnd(){
    this.setData({
      moveDistance:0,
      moveTransition:"transform 1s"
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 读取Storage中用户信息
    // let userInfo = JSON.parse(wx.getStorageSync("userInfo")||"{}");
    // this.setData({
    //   userInfo
    // })
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
    // 读取Storage中用户信息
    let userInfo = JSON.parse(wx.getStorageSync("userInfo") || "{}");
    this.setData({
      userInfo
    });
    let playListData = await ajax('/user/record',{
      type:1,
      uid:userInfo.userId
    });
    // console.log('playListData', playListData)
    this.setData({
      playList: playListData.weekData.map(function(item){
        return item.song.al.picUrl
      })
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