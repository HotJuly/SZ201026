// pages/song/song.js
import ajax from '../../../utils/ajax.js';
import PubSub from 'pubsub-js';
import moment from 'moment';

// 获取小程序唯一app实例
let appInstance = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay:false,
    songId:null,
    currentWidth:0,
    currentTime: 0,
    durationTime: 0,
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

    // let backgroundAudioManager = wx.getBackgroundAudioManager();

    if(this.data.isPlay){
      //播放音频
      // 由于歌曲详细信息中没有音频链接,所以需要单独请求
      // let { data: [{ url }] } = await ajax('/song/url', { id : this.data.songId })
      // // console.log('urlData', urlData)
      // // this.setData({
      // //   songUrl: urlData.data[0].url
      // // });
      // this.setData({
      //   songUrl: url
      // });

      if (!this.data.songUrl) {
        await this.getMusicUrl();
      }

      /*
        控制背景音频播放
          1.获取背景音频管理器
          2.给背景音频管理器实例对象设置src和title属性(title必传!!!)
      */
      // let backgroundAudioManager = wx.getBackgroundAudioManager();
      this.backgroundAudioManager.src = this.data.songUrl;
      this.backgroundAudioManager.title = this.data.songObj.name;

      // 缓存songId和播放状态
      appInstance.globalData.audioId = this.data.songId;
      appInstance.globalData.playState = true ;

    }else{
      //暂停音频
      this.backgroundAudioManager.pause()

      // appInstance.globalData.audioId = this.data.songId;
      appInstance.globalData.playState = false;
    }
    // console.log(this.data.isPlay)
    // return;

    
  },

  // 用于监听用户点击的是上一首/下一首按钮
  switchType(event){
    let {id} = event.currentTarget;
    // console.log('switchType',id);

    // 通知recommendSong页面,找到对应的歌曲id给我
    PubSub.publish('switchType',id);

  },

  // 用于获取当前歌曲最新数据
  async getSongDetail(){
    let {songId} = this.data;
    let detailData = await ajax('/song/detail', { ids: songId });
    this.setData({
      songObj: detailData.songs[0],
      songId,
      durationTime: detailData.songs[0].dt
      // durationTime: moment(detailData.songs[0].dt).format("mm:ss")
    });
  },

  async getMusicUrl(){
    // 由于歌曲详细信息中没有音频链接,所以需要单独请求
    let { data: [{ url }] } = await ajax('/song/url', { id : this.data.songId })
    this.setData({
      songUrl: url
    });
  },

  // 用于绑定背景音频的监听事件
  addEvent(){
    // 用于监视背景音频是否正在播放
    // onPlay只能绑定一个事件回调函数
    this.backgroundAudioManager.onPlay(()=>{
      // console.log('onPlay1')
      this.setData({
        isPlay:true
      });

      appInstance.globalData.playState = true;
    })


    // 用于监视背景音频是否已经暂停
    this.backgroundAudioManager.onPause(() => {
      // console.log('onPlay1')
      this.setData({
        isPlay: false
      })

      appInstance.globalData.playState = false;
    })


    // 用于监视背景音频进度是否更新
    this.backgroundAudioManager.onTimeUpdate(() => {
      // console.log('onTimeUpdate')
      // 计算当前红色进度条宽度
      // let durationTime = this.data.durationTime;
      let durationTime = this.backgroundAudioManager.duration * 1000;
      let currentTime = this.backgroundAudioManager.currentTime * 1000;
      let currentWidth = currentTime * 100/ durationTime;
      this.setData({
        currentWidth,
        currentTime: currentTime
        // currentTime: moment(currentTime).format('mm:ss')
      })
    })


    //测试API:将音频进度从最后5秒钟开始
    // this.backgroundAudioManager.startTime = 317;

    // 用于监视背景音频进度是否更新
    this.backgroundAudioManager.onEnded(() => {
      //自动切换下一首
      PubSub.publish('switchType', "next");
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // console.log('PubSub', PubSub)
    // console.log('appInstance1', appInstance.aa.msg)
    // appInstance.aa.msg = "我是修改之后的数据"
    // console.log('appInstance2', appInstance.aa.msg)
    // console.log('options',options)
    // console.log('song', JSON.parse(options.song))


    this.backgroundAudioManager = wx.getBackgroundAudioManager();

    //通过路由传参获取到歌曲id
    let {songId} = options;

    this.setData({
      songId
    })

    // 请求歌曲详细信息
    // let detailData = await ajax('/song/detail', { ids: songId}) ;
    // console.log('detailData', detailData)
    // this.setData({
    //   songObj: detailData.songs[0],
    //   songId
    // });

    await this.getSongDetail();

    // 通过js代码动态控制页面导航栏标题
    wx.setNavigationBarTitle({title:this.data.songObj.name});

    //判断当前歌曲和正在播放的背景音频是否是同一首歌
    let { audioId , playState } = appInstance.globalData;
    if (audioId === songId && playState){
      this.setData({
        isPlay:true
      })
    }


    //用于接收recommendSong页面找到的对应歌曲id
    PubSub.subscribe('sendId',async (msg, songId) => {
      // console.log('sendId', songId)
      this.setData({
        songId
      })
      this.getSongDetail();
      await this.getMusicUrl();

      // 更新背景音频播放
      this.backgroundAudioManager.src = this.data.songUrl;
      this.backgroundAudioManager.title = this.data.songObj.name;
    })

    this.addEvent();
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