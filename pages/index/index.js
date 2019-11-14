let WxNotificationCenter = require('../../config/WxNotificationCenter.js');
let app = getApp();
let systemInfo = wx.getSystemInfoSync();
let windowWidth = systemInfo.windowWidth;
let windowHeight = systemInfo.windowHeight;
let fileSystemManager = wx.getFileSystemManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isiPhoneX: false,
    dataSource: null,
    windowWidth,
    width: 0,
    height: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000'
    })
    this.setData({
      isiPhoneX: app.globalData.isiPhoneX,
    });
    this.readData();
    let that = this;
    ///添加点击节点的通知
    WxNotificationCenter.addNotification("NOTI_TREECLICK", that.itemClick, that);
  },
  onUnload: function() {
    let that = this;
    ///移除通知
    WxNotificationCenter.removeNotification(NOTI_TREECLICK, that);
    WxNotificationCenter.removeNotification(NOTI_TREEEDIT, that);
  },
  ///节点点击
  itemClick: function(event) {
    wx.showModal({
      title: `提示`,
      content: `当前操作节点是${event.username}`,
    })
  },
  ///读取数据
  readData: function() {
    let jsonData = "{\"name\":\"\",\"relationid\":34,\"username\":\"何先生\",\"gender\":0,\"thumb\":\"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIpYoDe6gaZwdbLsZSohOBLgbOib6GCOCn9ulwjXUm4v26HeqA05n0VEWLib7QbBowreO9PUamOrB0w/132\",\"level\":null,\"child\":\"35,36,51\",\"is_wife\":\"0\",\"isBind\":1,\"isself\":true,\"children\":[{\"name\":\"郭先生\",\"relationid\":35,\"gender\":0,\"username\":\"郭先生\",\"thumb\":\"\",\"level\":3,\"child\":\"37,43\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"凤姐\",\"relationid\":43,\"gender\":1,\"username\":\"凤姐\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false},\"children\":[{\"name\":\"吴先生\",\"relationid\":37,\"gender\":0,\"username\":\"吴先生\",\"thumb\":\"\",\"level\":3,\"child\":\"38,39,42,45\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"乔碧萝\",\"relationid\":42,\"gender\":1,\"username\":\"乔碧萝\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false},\"children\":[{\"name\":\"严先生\",\"relationid\":38,\"gender\":0,\"username\":\"严先生\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"0\",\"isBind\":0,\"isself\":false},{\"name\":\"张先生\",\"relationid\":39,\"gender\":0,\"username\":\"张先生\",\"thumb\":\"\",\"level\":3,\"child\":\"44\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"蔡徐坤\",\"relationid\":44,\"gender\":1,\"username\":\"蔡徐坤\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false}},{\"name\":\"陈先生\",\"relationid\":45,\"gender\":0,\"username\":\"陈先生\",\"thumb\":\"\",\"level\":3,\"child\":\"49,58\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"children\":[{\"name\":\"邓先生\",\"relationid\":49,\"gender\":0,\"username\":\"邓先生\",\"thumb\":\"\",\"level\":3,\"child\":\"50\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"彭女士\",\"relationid\":50,\"gender\":1,\"username\":\"彭女士\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false}},{\"name\":\"谭先生\",\"relationid\":58,\"gender\":0,\"username\":\"谭先生\",\"thumb\":\"\",\"level\":3,\"child\":\"59\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"欧阳先生\",\"relationid\":59,\"gender\":1,\"username\":\"欧阳先生\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false}}]}]}]},{\"name\":\"焦先生\",\"relationid\":36,\"gender\":0,\"username\":\"焦先生\",\"thumb\":\"\",\"level\":3,\"child\":\"41,46,47\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"张女士\",\"relationid\":41,\"gender\":1,\"username\":\"张女士\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false},\"children\":[{\"name\":\"黄先生\",\"relationid\":46,\"gender\":0,\"username\":\"黄先生\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"0\",\"isBind\":0,\"isself\":false},{\"name\":\"纪先生\",\"relationid\":47,\"gender\":0,\"username\":\"纪先生\",\"thumb\":\"\",\"level\":3,\"child\":\"48\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"候女士\",\"relationid\":48,\"gender\":1,\"username\":\"候女士\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false}}]},{\"name\":\"周先生\",\"relationid\":51,\"gender\":0,\"username\":\"周先生\",\"thumb\":\"\",\"level\":3,\"child\":\"52,53,54,55\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"程先生\",\"relationid\":54,\"gender\":1,\"username\":\"程先生\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false},\"children\":[{\"name\":\"李先生\",\"relationid\":52,\"gender\":0,\"username\":\"李先生\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"0\",\"isBind\":0,\"isself\":false},{\"name\":\"徐先生\",\"relationid\":53,\"gender\":0,\"username\":\"徐先生\",\"thumb\":\"\",\"level\":3,\"child\":\"57\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"朱女士\",\"relationid\":57,\"gender\":1,\"username\":\"朱女士\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false}},{\"name\":\"方先生\",\"relationid\":55,\"gender\":0,\"username\":\"方先生\",\"thumb\":\"\",\"level\":3,\"child\":\"56\",\"is_wife\":\"0\",\"isBind\":0,\"isself\":false,\"wife\":{\"name\":\"高女士\",\"relationid\":56,\"gender\":1,\"username\":\"高女士\",\"thumb\":\"\",\"level\":3,\"child\":null,\"is_wife\":\"1\",\"isBind\":0,\"isself\":false}}]}]}";
    this.setData({
      dataSource: JSON.parse(jsonData)
    })
    if (this.data.dataSource) {
      let that = this;
      ///渲染完成后获取子组件大小重新设置宽高
      wx.createSelectorQuery().select('#rootTree').boundingClientRect(function(rect) {
        that.setData({
          width: rect.width > windowWidth ? rect.width : windowWidth,
          height: rect.height > windowHeight ? rect.height : windowHeight,
        })
      }).exec();
    }
  }
})