<template>
  <div class="bg">
    <div class="top">
      <uwo-header></uwo-header>
    </div>
    <div class="left">
      <uwo-side></uwo-side>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import uwoHeader from './commen/header'
import uwoSide from './commen/sideList'
export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    uwoHeader,
    uwoSide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/style/mixin";
.bg {
  margin: 0;
  height: 100%;
  overflow: hidden;
  .top {
    position: absolute;
    width: 100%;
    height: 100px;
  }
  .left {
    position: absolute;
    left: 0;
    top: 100px;
    bottom: 0px;
    width: 200px;
    background: white;
    padding:  0 15px;
  }
  .right {
    position: absolute;
    left: 200px;
    top: 100px;
    bottom: 1px;
    right: 0;
    overflow: hidden;
    padding: 0 10px 10px;
  }
  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background:white;
  }
}
</style>
