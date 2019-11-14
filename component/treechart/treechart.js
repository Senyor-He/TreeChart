// component/treechart.js
let WxNotificationCenter = require('../../config/WxNotificationCenter.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataSource: Object,
    isRoot: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件的方法列表
   */
  methods: {
    ///点击用户
    itemClick: function (event) {
      let item = event.currentTarget.dataset.item;
      ///回调事件
      WxNotificationCenter.postNotificationName('NOTI_TREECLICK', item);
    }
  }
})