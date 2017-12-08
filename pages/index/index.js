//index.js
//获取应用实例
//是页面脚本，在这个文件中监听并处理页面的声明周期函数 onLoad（） 获取小程序实例getApp();
//这个是页面逻辑处理层。
/**
 * Page() 方法用来注册一个页面。
 * page()接受一个object参数，用于指定页面的初始数据、生命周期、事件处理函数等。Page()方法每个页面有且只有一个，
 * 存在于该页面.js文件中
 * object参数：
 * data-->Object 页面的初始数据
 * onLoad-->Function 生命周期 (监听页面加载)
 * onReady-->Fucntion 生命周期 (监听页面除此渲染完成)
 * onShow-->Function 生命周期(监听页面显示)
 * onHide-->Function 生命周期 (监听页面隐藏)
 * onUnload-->生命周期 (监听页面卸载)
 * onPullDownRefresh Function
 * onReachBottom -->生命周期 Function
 *
 * getCurrentPage() 获取当前页面的实例
 */
const app = getApp()
Page({
  data: {
    motto: '这是个什么玩意motto',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
//生命周期函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})
