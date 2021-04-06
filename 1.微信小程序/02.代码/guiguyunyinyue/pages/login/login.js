// pages/login/login.js
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"17688197777",
    password:""
  },

  handlePhone(event){
    //收集用户输入的数据
    // 形参接收的是event对象,内部具有detail属性可以看到用户输入的数据
    console.log('handlePhone', event);
    let {value} = event.detail;
    this.setData({
      phone: value
    })
  },
  handlePassword(event) {
    console.log('handlePassword', event)
    let { value } = event.detail;
    this.setData({
      password: value
    })
  },
  handleInput(event) {
    //小程序中,向事件回调函数内部传递参数,需要使用自定义属性或者标签属性
    let { value } = event.detail;
    let { type } = event.target.dataset;
    console.log('handleInput', value, type)
    this.setData({
      [type]: value
    })
  },
  async handleLogin(){
    /*
      1.收集用户数据
      2.前台表单验证
      3.发送请求,等待响应
    */

    let { phone , password } = this.data;
    // console.log(phone, password)
    // if(!phone.trim()){
    //   wx.showToast({
    //     title:"手机号码不能为空"
    //   });
    //   return;
    // }

    // if (!password.trim()) {
    //   wx.showToast({
    //     title: "密码不能为空"
    //   });
    //   return;
    // }
    let result;
    try {
      result = await ajax('/login/cellphone', {
        phone,
        password,
        isLogin:true
      });
      // console.log('loginResult', result)
    } catch (e) {
      // console.log('e',e)
      let { code } = result;
      if (code === 501 || code === 400 || code === 509) {
        wx.showToast({
          title: '登陆失败,帐号错误'
        })
      }
    }
    /*
      状态码:
        400,501 帐号错误
        502 密码错误
        200 登录成功
    */
    let { code, profile } = result;
    if(code===200){
      wx.showToast({
        title: '登陆成功,即将跳转',
        icon:"none"
      })
      console.log('result', result)
      // 将用户数据保留到Storage中
      wx.setStorage({
        key:"userInfo",
        data: JSON.stringify(profile)
      })


      wx.switchTab({
        url:"/pages/personal/personal"
      })

    } else if (code === 502) {
      wx.showToast({
        title: '登陆失败,密码错误',
        icon: "none"
      })
    } else if (code === 501 || code === 400) {
      wx.showToast({
        title: '登陆失败,帐号错误',
        icon: "none"
      })
    }
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