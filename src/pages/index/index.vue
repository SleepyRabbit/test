<template>
  <div id="app" class="container">
    <ui>
      <li>Nickname: {{nickName}}</li>
      <li>Gender: {{gender}}</li>
      <li>Language: {{language}}</li>
      <li>City: {{city}}</li>
      <li>Province: {{province}}</li>
    </ui>
    <span>
      <button open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
      <button @click="getUserLocation">获取位置信息</button>
      <button @click="chooseUserLocation">设置位置信息</button>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickName: '',
      gender: '',
      language: '',
      city: '',
      province: '',
    }
  },

  methods: {
    getUserInfo: function(e) {
      var userInfo = e.mp.detail.userInfo;
      console.log(userInfo);
      this.nickName = userInfo.nickName;
      this.gender = userInfo.gender;
      this.language = userInfo.language;
      this.city = userInfo.city;
      this.province = userInfo.province;
    },
    getUserLocation: function() {
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          console.log(res);
          var latitude = res.latitude;
          var longitude = res.longitude;
          var speed = res.speed;
          var accuracy = res.accuracy;
        }
      });
    },
    chooseUserLocation: function() {
      wx.chooseLocation({
        success: function(res) {
          console.log("choose");
          console.log(res);
        }
      });
    },
  },

  created () {
  }
}
</script>

<style scoped>
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }

</style>
