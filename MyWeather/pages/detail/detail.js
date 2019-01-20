// pages/detail/detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      topCity: {},
      weatherInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadWeatherData(options)
  },
  loadWeatherData: function (options) {
    var cityCode = options.city_code || '';
    if (cityCode == "") {
      wx.navigateBack();
    }
    var weatherData = wx.getStorageSync('weatherData');
    var weatherInfo = weatherData[cityCode];
    if (weatherInfo == undefined) {
      wx.navigateBack();
    }

    var topCity = {
      left: "",
      center: "",
      right: "",
    }
    try { topCity.center = weatherInfo.realtime.city_name; } catch (e) { }

    this.setData({
      userInfo: app.globalData.userInfo,
      weatherInfo: weatherInfo,
      topCity: topCity,
    })
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