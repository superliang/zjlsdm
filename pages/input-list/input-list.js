Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    array: ["中储粮","市收储公司","衢江区收储公司"],
    arraynums:[
        ["1P","2P","3P"],
        ["1S","2S","3S"],
        ["1Q","2Q","3Q"]
    ],
    array3:["早籼谷","圆早籼谷","晚籼谷","粳谷"],
    array4:["2019","2018","2017","2016","2015","2014"],
    index: 0,
    index1:0,
    index3:0,
    index4:0,
    date: '2016-09-01',
  },

  onbindchange:function(e){
    this.setData({
      index:e.detail.value
    })
  },

  bindpickerchange:function(e){
    this.setData({
      index1:e.detail.value
    })
  },

  bindchange3:function(e){
    this.setData({
      index3:e.detail.value
    })
  },

  bindchange4: function (e) {
    this.setData({
      index4: e.detail.value
    })
  },

  bindDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})