<script>
  export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app created and cache logs by setStorageSync')

    // 登录获取res.code
    wx.login({
      success: function(res) {
        // console.log(res);
        if (res.code) {
          var config = require("../config");
          // console.log(config.remoteServer);

          // 获取code后向目标服务器发起网络请求，获取openId, sessionKey
          wx.request({
            // url: 'http://127.0.0.1:3006/login',
            url: config.remoteServer + '/login',
            data: {
              code: res.code,
            },
            method: 'POST',
            // 成功获取openId和sessionKey
            success: function(res) {
              // {
              //   data: "{"session_key":"CXDjSfDC1UbXcrJZiaQJQQ==","openid":"o_zwE5uazPiMNgixodmYDhOgabjg"}"
              //   err: null
              // }
              console.log(res.data)
            },
            // 获取openId和sessionKey失败
            fail: function() {
              console.log('failed!');
            }
          })
        } else {
          console.log('获取用户登录状态失败！' + res.errMsg)
        }
      }
    });

    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.userInfo', 'scope.userLocation']) {
    //       wx.authorize({
    //         scope: 'scope.record',
    //         success() {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           // wx.startRecord()
    //           console.log("success!");
    //         },
    //         fail: function() {
    //           console.log("failed!");
    //         }
    //       })
    //     }
    //   }
    // })

    // wx.setStorage({
    //   key: "name",
    //   data: "hex",
    //   success: function(res) {
    //     console.log(res);
    //   }
    // });
    //
    // wx.getStorage({
    //   key: "name",
    //   success: function(res) {
    //     console.log(res);
    //   },
    //   fail: function(res) {
    //     console.log(res);
    //   }
    // })
  }
}
</script>

<style>
/*.container {*/
  /*height: 100%;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  /*justify-content: space-between;*/
  /*padding: 200rpx 0;*/
  /*box-sizing: border-box;*/
/*}*/
/*!* this rule will be remove *!*/
/** {*/
  /*transition: width 2s;*/
  /*-moz-transition: width 2s;*/
  /*-webkit-transition: width 2s;*/
  /*-o-transition: width 2s;*/
/*}*/
</style>
