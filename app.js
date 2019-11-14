//app.js
App({
  onLaunch: function () { },
  globalData: {
    isiPhoneX: false
  },
  onShow: function () {
    let that = this;
    ///获取机型 iPhoneX适配
    wx.getSystemInfo({
      success: function (res) {
        let model = res.model;
        that.globalData.isiPhoneX = model.search('iPhone X') != -1;
      },
    });
  }
})