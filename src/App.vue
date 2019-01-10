<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './assets/style/mixin';
  @import './assets/style/common';
  #app{
    @include wh(100%, 100%);
    background: #ecf1f5;
    overflow: hidden;
  }
</style>
