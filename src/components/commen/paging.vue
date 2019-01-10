// 翻页模版
<template>
  <div class="bg">
    <ul>
      <li @click.stop.prevent="decreasePage()">{{liData.leftArrow}}</li>
      <li v-for="(item,index) in liData.arrayValue" :key="index"
        @click.stop.prevent="changeCss(item)"
        :class="item === isActive ? 'activeCss' :''"
      >{{item}}</li>
      <li @click.stop.prevent="increasePage()">{{liData.rightArrow}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: 3,
      liData: null
    }
  },
  created () {
    this.initCss()
  },
  methods: {
    initCss () {
      this.liData = {
        leftArrow: '<',
        arrayValue: [1, 2, 3, 4, 5],
        rightArrow: '>'
      }
    },
    changeCss (item) {
      this.isActive = item
    },
    // 向左推进
    decreasePage () {
      var currentValue = this.liData.arrayValue[0]
      var str = []
      if (currentValue === 1) {
        console.log(str)
      } else {
        this.liData.arrayValue.forEach((item, itemIndex, array) => {
          item--
          str.push(item)
        })
        this.liData.arrayValue = str
      }
    },
    // 向右推进
    increasePage () {
      var str = []
      this.liData.arrayValue.forEach((item, itemIndex, array) => {
        item++
        str.push(item)
      })
      this.liData.arrayValue = str
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.bg {
  @include wh(auto,100%);
  background: #ffffff;
  overflow-x: scroll;
  ul{
      padding: 0 10rem;
      min-width: 200px;
      display: flex;
      li{
        @include wh(100%,100%);
        text-align: center;
        line-height: 50px;
        left: 47.69px;
        color: rgba(51, 51, 51, 1);
        font-size: 0.63rem;
        font-family: PingFangSC-Regular;
      }
      .activeCss{
        color: #4D90F5;
        font-size: 1.25rem;
      }
      li:first-child,li:last-child{
        font-size: 1.6rem;
      }
  }
}
</style>
