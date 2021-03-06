import Vue from 'vue'
import App from './App'
import "./assets/css/common.css"
import "./assets/icon/icomoon/style.css"

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/index/main', '^pages/log/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      borderStyle: "black",
      backgroundColor: "#ffffff",
      list: [{
        pagePath: "pages/index/main",
        iconPath: "static/img/wechat.png",
        selectedIconPath: "static/img/wechatHL.png",
        text: "组件"
      }, {
        "pagePath": "pages/log/main",
        iconPath: "static/img/icon_API.png",
        selectedIconPath: "static/img/icon_API_HL.png",
        "text": "接口"
      }]
    },
  }
}
