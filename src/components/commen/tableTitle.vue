// 标题栏模版
<template>
  <div class="bg">
    <p>{{headData}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: [
    'headData'
  ],
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.bg {
  @include wh(100%, 100%);
  padding-left: 20px;
  p {
    @include wh(100%, 30px);
    text-align: left;
    padding-left: 20px;
    border-left: 6px solid #5c9eff;
    border-radius: 4px 4px;
    margin: 0.5rem 0.5rem 0 0.1rem;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
    font-size: 0.88rem;
    font-family: PingFangSC-Regular;
  }
  hr {
    @include wh(100%, auto);
    border-top: 1px solid #d5d5d5;
    border-bottom: none;
    border-left: none;
    position: relative;
    left: -10px;
  }
}
</style>
