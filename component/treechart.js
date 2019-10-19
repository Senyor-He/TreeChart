// component/treechart.js
Component({
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        initialData: this.properties.dataSource
      })
    },
  },
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
    initialData: null
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
    longTapAction: function(event) {
      let dataSource = event.currentTarget.dataset.datasource;
      if (dataSource.children || dataSource.parent || dataSource.brother || dataSource.mate) {
        dataSource.openList = !dataSource.openList;
        let initialData = this.data.initialData;
        this.setData({
          dataSource: dataSource.openList ? dataSource : initialData,
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '没有了',
          showCancel: false
        })
      }
    },
  }
})