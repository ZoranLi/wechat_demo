//index.js
//获取应用实例
const app = getApp()
Page({
    // formSubmit: function (e) {
    //     console.log("form 发生了submit事件，",e.deatil.value)
    // },
    // formReset: function () {
    //     console.log("form 发生了reset事件，")
    // }
    data: {
        text: "init data",
        array: [{msg: 1}, {msg: 2}],
        staffA:{firstName:'Hulk',lastName:'secck'},
        count:1,
        id:0,
        condition:true,
        imageUrls:['http://image02.tooopen.com/images/','http://image01.tooopen.com/images']
    },
    add :function(e){
        this.setData({
            count:this.data.count+1
        })
    },
    changeText: function () {
        this.setData({
            text: 'change data'
        })
    },
    changeItemInObject: function () {
        this.setData({
            'array[0].msg': 'change data01'
        });
        wx.requestPayment({
          timeStamp: ';',
          nonceStr: '',
          package: '',
          signType: '',
          paySign: '',
        
        })
    }
})
