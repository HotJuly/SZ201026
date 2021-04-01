Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"花花"
  },
  // 面试题:如何实现对象深拷贝
  //  JSON.parse(JSON.stringify(obj))乞丐版

  // data(){
  //   return {}
  //   {}==={}
  //   // new Object() === new Object()
  // }

  /**
   * 生命周期函数--监听页面加载
   */
  handleClick(){
    this.setData({
      msg:"我是修改之后的数据"
    })
  },
  handleParent() {
    // console.log('handleParent')
  },
  handleChildren(){
    // console.log('handleChildren')
    // 可以使用相对路径,也可以使用绝对路径

    //这个API会保留当前页面
    wx.navigateTo({
      url:"/pages/logs/logs"
    })

    //这个API会关闭当前页面
    // wx.redirectTo({
    //   url: "../logs/logs"
    // })
  },
  onLoad: function (options) {
    // console.log('0',this.data.msg)
    // this.setData({
    //     msg:3
    // })
    // console.log('3', this.data.msg)
    // this.setData({
    //     msg:4
    // })
    // console.log('4', this.data.msg)

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