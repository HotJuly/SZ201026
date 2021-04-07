// pages/video/video.js
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    navId:null,
    currentId:null
  },

  // 头部导航区域点击事件回调
  async changeId(event){
    /*
      自定义属性数据值可以为任意类型,你给他什么,他返回给你就是什么
      标签属性数据值只能是字符串,你给他什么,他返回的都是字符串
     */
    // console.log('changeId',event.currentTarget)
    // let { id } = event.currentTarget.dataset;
    let { id } = event.currentTarget;
    this.setData({
      navId:id*1
    })

    // 弹出loading提示框
    wx.showLoading({
      title:"加载中,请稍后..."
    })

    // 清空video列表,实现白屏效果,提升用户体验
    this.setData({
      videoList:[]
    });

    await this.getVideoList();

    // console.log('1')
    // 关闭loading提示框
    wx.hideLoading();
  },

  // 用于请求视频列表数据
  async getVideoList(){
    let videoListData = await ajax('/video/group', { id: this.data.navId });
    // console.log(videoListData)
    // console.log('2')
    this.setData({
      videoList: videoListData.datas
    })
  },

  // 专门用于测试控制video组件的播放状态
  testApi(){
    // 停止第一个视频的播放
    let vid = '865B00C59CA43DA912C41399A03CC37A';
    let videoContext = wx.createVideoContext(vid);
    videoContext.pause();
  },

  // 用于监视视频的播放状态
  handlePlay(event){
    // console.log('handlePlay', event.currentTarget.id);

    // 获取当前正在播放的视频id
    let vid = event.currentTarget.id

    //停止上一个视频的播放
    // 注意:第一个播放的视频是没有上一个的,所以需要判断
    if (this.oldVid && this.oldVid !== vid) {
      let videoContext = wx.createVideoContext(this.oldVid);
      videoContext.pause();
    }

    //将当前视频id保留下来
    this.oldVid = vid;
  },

  // 用于处理用户点击image组件,实现image组件和video组件之间的切换
  handleClick(event){
    // console.log('handleClick')
    // 获取到当前image组件的id
    let {id} = event.currentTarget;

    // 更新data,控制video组件显示
    this.setData({
      currentId:id
    })

    // 通过js代码实现视频自动播放
    let videoContext = wx.createVideoContext(id);
    videoContext.play();
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

    // 步骤二:请求视频列表数据
    // let videoListData = await ajax('/video/group', { id : this.data.navId});
    // console.log(videoListData)
    // this.setData({
    //   videoList: videoListData.datas
    // })
    this.getVideoList();
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
  onShareAppMessage: function (obj) {
    /* 
      该事件回调函数触发渠道两个
        1.右上角转发按钮
        2.button组件添加open-type="share"
      业务需求:
        1.右上角转发->分享整个小程序
        2.button组件转发->分享某个页面

      拆解:
        1.需要区分触发事件的来源
        2.通过返回的对象自定义分享内容
    */
    let { from , target} = obj;
    if (from === "menu"){
      // 说明是右上角转发按钮进来的

      return  {
        title:"硅谷云音乐",
        path:"/pages/index/index",
        imageUrl:"/static/images/nvsheng.jpg"
      };

      // console.log('onShareAppMessage', obj)
    } else if (from === "button") {
      // 说明是button组件转发进来的
      // console.log('button',target)
      let { title , imageurl } = target.dataset;
      return {
        title,
        path: "/pages/video/video",
        imageUrl: imageurl
      }
    }
  }
})