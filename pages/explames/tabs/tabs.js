//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menus: ['首页', '孕婴', '童装', '玩具', '美妆', '美食', '家具', '女装', '男装',
      '首页', '孕婴', '童装', '玩具', '美妆', '美食', '家具', '女装', '男装结束'
    ],
    currentMenuIndex: 0,
    menusButtomLeft: 0
  },
  onPressMemu: function (e) {
    console.log("左偏移量：" + e.detail.x)
    console.log("索引：" + e.currentTarget.dataset.index)
    this.setData({
      currentMenuIndex: e.currentTarget.dataset.index,
      menusButtomLeft: e.target.offsetLeft
    })
  },
  scroll: function () {}
})