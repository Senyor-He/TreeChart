
let app = getApp();
let dataSource = {
  username: '习大大',
  thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
  wife: {
    username: "何先生",
    thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132'
  },
  children: [{
    username: "何先生",
    thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
    wife: {
      username: "何先生的老婆",
      thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132'
    },
    children: [{
      username: "何先生",
      thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
      wife: {
        username: "何先生的老婆",
        thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132'
      },
      children: [{
        username: "何先生",
        thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
        wife: {
          username: "何先生的老婆",
          thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132'
        },
        children: [{
          username: "何先生",
          thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
          wife: {
            username: "何先生的老婆",
            thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132'
          }
        }]
      }, {
        username: "何先生",
        thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
      }]
    }, {
      username: "何先生",
      thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
      children: [{
        username: "何先生",
        thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
        children: [{
          username: "何先生",
          thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
        }, {
          username: "何先生",
          thumb: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLWwqLHoIAGsiaDq4LbTJpCw0LrA545oc4wvU1EU8tAM717PH9icTiaLeu0aVbU44a2m2kkaRGcX87qg/132',
        }]
      }]
    }]
  }]
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isiPhoneX: false,
    dataSource,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000'
    })
    this.setData({
      isiPhoneX: app.globalData.isiPhoneX,
    });
  },
})