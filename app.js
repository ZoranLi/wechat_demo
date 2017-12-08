//app.js
/**
* app.js是小程序的脚本代码，用来监听小程序的声明周期函数、声明全局变量
*    关于app.js的一些概述
*     wx.getStorageSync('logs')调用API从本地缓存中取数据
*     wx.setStorageSync('logs', logs)调用API存入数据到本地logs为key logs为字符串类型
*声明周期方法：
 * onLaunch:function(){
 * 启动时执行的初始化工作
 * }
 * onShow 从后台进入前台，触发执行的操作
 * onHide 从前台进入后台，触发执行
*
*完整的声明周期方法：onLaunch --> onShow --> onLoad -->onShow -->onReady
 * onHide-->onLoad-->onShow-->onReady
 * App()方法必须在app.js中注册，而且不能注册多个
 * 不要在定义app()内的函数中调用getApp函数，使用this就可以拿到app的实例
 * 通过getApp（）获取实例之后，不要私自调用声明周期函数！！！
*/
App({
    // onLaunch是生命周期函数--监听小程序初始化	当小程序初始化完成时，会触发 onLaunch、（全局只触发一次）
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        console.log("onLaunch is Launched");
        // 登录
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            // console.log('获取成功'+wx.getUserInfo());
          }
        });
        // 获取用户信息
        wx.getSetting({
            success: res => {
            if(res.authSetting['scope.userInfo'])
        {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
                success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
            }
        }
        })
        }
    }
    })
    },
    //当小程序启动，或从后台进入前台显示，会触发 onShow
    onShow: function () {
        console.log("onShow is Launched");
    },
    //当小程序从前台进入后台，会触发 onHide
    onHide: function () {
        console.log("onHide is Launched");
    },
    //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    onError: function () {
        console.log("onError is Launched");
    },
    globalData: {
        userInfo: null
    }
})