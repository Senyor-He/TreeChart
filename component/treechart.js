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
  data: {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tapAction: function(event) {
      let dataSource = event.currentTarget.dataset.datasource;
      console.log(dataSource);
      wx.showModal({
        title: '提示',
        content: `当前操作项是${dataSource.name}`,
        showCancel: false
      })
      // wx.showActionSheet({
      //   itemList: ['菜单项1', '菜单项2', '菜单项3'],
      //   itemColor: '#333',
      // })
    },
  }
})