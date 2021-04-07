// pages/song/song.js
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay:false,
    songId:null
  },

  // 用于处理用户点击播放按钮操作
  async handlePlay(){

    //通过isPlay状态控制页面C3效果运转
    this.setData({
      isPlay:!this.data.isPlay
    })

    // 判断当前是否正在播放歌曲
    //如果正在播放,就暂停
    //如果已经暂停或者没有播放,就继续播放
    //由于上面16行已经更新取反了isPlay状态,
    // 所以当前为true代表即将播放(未播放),如果当前为false代表即将暂停(正在播放)

    let backgroundAudioManager = wx.getBackgroundAudioManager();

    if(this.data.isPlay){
      //播放音频
      // 由于歌曲详细信息中没有音频链接,所以需要单独请求
      let { data: [{ url }] } = await ajax('/song/url', { id : this.data.songId })
      // console.log('urlData', urlData)
      // this.setData({
      //   songUrl: urlData.data[0].url
      // });
      this.setData({
        songUrl: url
      });

      /*
        控制背景音频播放
          1.获取背景音频管理器
          2.给背景音频管理器实例对象设置src和title属性(title必传!!!)
      */
      // let backgroundAudioManager = wx.getBackgroundAudioManager();
      backgroundAudioManager.src = url;
      backgroundAudioManager.title = this.data.songObj.name;

    }else{
      //暂停音频
      backgroundAudioManager.pause()

    }
    // console.log(this.data.isPlay)
    // return;

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    console.log('options',options)
    // console.log('song', JSON.parse(options.song))

    //通过路由传参获取到歌曲id
    let {songId} = options;

    // 请求歌曲详细信息
    let detailData = await ajax('/song/detail', { ids: songId}) ;
    console.log('detailData', detailData)
    this.setData({
      songObj: detailData.songs[0],
      songId
    });

    // 通过js代码动态控制页面导航栏标题
    wx.setNavigationBarTitle({title:this.data.songObj.name})
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