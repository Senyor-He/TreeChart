// component/treechart.js
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
    itemClick: function(event) {
      let item = event.currentTarget.dataset.item.username;
      wx.showModal({
        title: '提示',
        content: `当前操作项是${item}`,
      })
    }
  },
})