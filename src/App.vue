<script>
  export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    console.log('app created and cache logs by setStorageSync');

    // wx.getStorage({
    //     key: "keyInfo",
    //     success: function(res) {
    //       console.log(res);
    //     },
    //     fail: function(res) {
    //       console.log(res);
    //     }
    // });

    // 检查session，如果有效就获取用户信息；无效就重新登录
    wx.checkSession({
      success: function() {
        console.log("Session valid!");
      },
      fail: function() {
        console.log("Session invalid!");

        // 登录获取res.code
        wx.login({
          success: function(res) {
            // console.log(res);
            if (res.code) {
              var config = require("../common/config");

              // 获取code后向目标服务器发起网络请求，服务器获取openId, sessionKey后生成病返回3rd_session。
              wx.request({
                // url: 'http://127.0.0.1:3006/login',
                url: config.remoteServer + '/login',
                data: {
                  code: res.code,
                },
                method: 'POST',
                // 成功获取3rd_session
                success: function(res) {
                  // console.log(res.data.session);
                  // 将3rd_session存储起来
                  wx.setStorage({
                    key: "keyInfo",
                    data: res.data.session,
                    success: function(res) {
                      console.log(res);
                    }
                  });

                },
                // 获取openId和sessionKey失败
                fail: function() {
                  console.log('failed!');
                }
              })
            } else {
              console.log('获取用户登录状态失败！' + res.errMsg);
            }
          }
        });

      }
    });

    // 查看是否授权
    // wx.getSetting({
    //   success: function(res) {
    //     console.log('Get setting succeed!');
    //     if (!res.authSetting['scope.record']) {
    //       console.log("scope.userinfo not auth!");
    //       wx.authorize({
    //         scope: 'scope.record',
    //         success() {
    //           // 用户已经同意小程序使用用户信息
    //           // wx.startRecord()
    //           console.log("success!");
    //         },
    //         fail: function() {
    //           console.log("failed!");
    //         }
    //       })
    //     }
    //   },
    //   fail: function() {
    //     console.log('Get setting failed!');
    //   }
    // })

  }
}
</script>

<style>
</style>
