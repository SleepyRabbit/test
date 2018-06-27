<template>
  <div id="log" class="container">
    Log
    <swiper indicator-dots="indicatorDots" autoplay="autoplay"">
      <block v-for="(url, index) in imgUrls" :index="index" :key="key">
        <swiper-item>
          <div>{{url}}</div>
          <image src=":url" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
    }
  },

  methods: {
  },

  created () {
  }
}
</script>

<style scoped>
  #log {
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
