//app.js
var api=require('./libs/api')
App({
  onLaunch: function () {
    this.loadWeatherData();
    this.getUserInfo();
  },
  
  loadWeatherData: function () {
    var citySelected = wx.getStorageSync('citySelected') || [];
    if (citySelected.length == 0) {
      citySelected.unshift("__location__");
      wx.setStorageSync('citySelected', citySelected);
    }
    var that = this
    for (var idx in citySelected) {
      var cityCode = citySelected[idx];
      api.loadWeatherData(cityCode, function (cityCode, data) {//对选择的每一个城市读取天气信息
        var weatherData = wx.getStorageSync('weatherData') || {};
        weatherData[cityCode] = data;
        wx.setStorageSync('weatherData', weatherData);
      });
    }
  },
  
  getUserInfo:function(){
    var that=this
    wx.getUserInfo({
      withCredentials:false,
      success:function(res){
        that.globalData.userInfo=res.userInfo
      }
    })
  },
  globalData: {
    userInfo: null
  }
})