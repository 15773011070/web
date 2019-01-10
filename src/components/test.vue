<template>
  <div class="bg">
    <div class="headerDiv">
      <uwo-header></uwo-header>
    </div>
    <div class="routerDiv">
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import uwoHeader from './commen/header'
export default {
  data () {
    return {}
  },
  methods: {},
  components: {
    uwoHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/style/mixin";
.bg {
  @include wh(100%,100%);
  // width: 100%;
  // min-height: 54rem;
  overflow: hidden;
  .headerDiv{
    @include wh(100%, auto);
  }
  .routerDiv{
    @include wh(100%,auto);
    // min-height: 47.75rem;
    background: #FFFFFF;
  }
}
</style>
