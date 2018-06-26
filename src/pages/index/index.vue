<template>
  <div id="app" class="container">
    我是首页
    <button open-type="getUserInfo" @getuserinfo="getUserInfo">用户</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    getUserInfo: function(e) {
      console.log(e.mp.detail.userInfo);
    }
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
