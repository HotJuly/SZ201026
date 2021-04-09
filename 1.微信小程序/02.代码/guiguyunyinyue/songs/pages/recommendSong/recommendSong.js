// pages/recommendSong/recommendSong.js
import ajax from '../../../utils/ajax.js';
import PubSub from 'pubsub-js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    month:"--",
    day:"--",
    recommendList:[],
    currentIndex:null
  },

  // 用于去往歌曲详情页面
  toSong(event){
    // console.log('toSong', event.currentTarget.dataset.song)
    // 小程序中可以通过query进行参数传递(页面通信)
    // url具有长度限制,song对象的json版本长度过长
    let { songid, index } = event.currentTarget.dataset;

    // 记录当前进入的是哪首歌
    this.setData({
      currentIndex: index
    });

    wx.navigateTo({
      url: '/songs/pages/song/song?songId=' + songid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    /*
      权限检测
        如果用户没有登录,弹出窗口提示
        如果用户已登录,就正常请求数据
     */
    if(wx.getStorageSync('cookie')){
      //说明登录成功
      //获取今日日期
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      // console.log(day, month)
      this.setData({
        day,
        month
      })

      let recommendData = await ajax('/recommend/songs');
      // console.log(recommendData)
      this.setData({
        recommendList: recommendData.recommend.slice(0, 10)
      })
    }else{
      //说明用户没有登录
      wx.showModal({
        title:"请先登录",
        content:"该功能需要登录帐号",
        cancelText:"回到首页",
        confirmText:"去登陆",
        success:({confirm,cancel})=>{
          console.log('success', confirm, cancel)
          if (confirm){
            // 说明用户点击去往登录
            wx.redirectTo({
              url:"/pages/login/login"
            })
          } else {
            // 说明用户点击回到首页
            wx.navigateBack();
          }
        }
      })

    }

    // 订阅消息,监视song页面用户的切歌操作
    PubSub.subscribe('switchType',(msg,data)=>{
      // console.log('recommendSong', msg, data)
      /* 
        找到对应的歌曲
        通过跳转之前记录的下标判断
        下一首歌 下标+1
        上一首歌 下标-1
        需要做临界值判断
          如果当前已经是第一首歌,返回最后一首歌的id
          如果当前已经是最后一首歌,返回第一首歌的id
      */ 
      let { recommendList , currentIndex } = this.data;
      let newSongId = null;
      if (data==="pre"){
        if(currentIndex===0){
          currentIndex= recommendList.length-1;
        } else {
          currentIndex -= 1;
        }
      } else {
        if (currentIndex === recommendList.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex += 1;
        }
      }
      newSongId = recommendList[currentIndex].id;
      this.setData({
        currentIndex
      })

      // 将对应歌曲的id发送给song页面
      PubSub.publish('sendId', newSongId);
    })
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