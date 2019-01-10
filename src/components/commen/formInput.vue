// 纯输入表单
<template>
  <div class="bg" ref="bg">
    <div class="ulDiv" :style="ulDivStyleObj">
      <ul>
        <li v-for="(item,index) in headList" :key="index"><span>{{item}}</span><input></li>
      </ul>
    </div>
    <div class="btnDiv" ref="btnDiv">
      <button>确定添加</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ulDivStyleObj: {// 初始化高度
        height: ''
      }
    }
  },
  props: [
    'headList'
  ],
  mounted () {
    this.getHeight()
    window.addEventListener('resize', this.getHeight)
  },
  methods: {
    // 设置初始化高度方法
    getHeight () {
      let bgHeight = this.$refs.bg.clientHeight
      let btnDivHeight = this.$refs.btnDiv.clientHeight
      this.ulDivStyleObj.height = bgHeight - btnDivHeight + 'px'
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.bg {
  @include wh(100%, 100%);
  // background: #ffffff;
  .ulDiv{
    width: 100%;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    ul{
      @include wh(80%,auto);
      margin-top: 1.5rem;
      margin-left: 3rem;
      // display: inline;
      display: table;
      li{
        @include wh(100%,2rem);
        font-family: PingFangSC-Regular;
        span{
          width: 18%;
          margin-right: 2%;
          height: 2rem;
          float: left;
          line-height: 2rem;
          padding-top: .05rem;
        }
        input{
          float: left;
          width: 70%;
          height: 2rem;
          padding-left: 1rem;
          outline:none;
          color: #979797;
          border-bottom: .5px solid #ECF1F5;
          word-break:keep-all;
          white-space:nowrap;
          overflow-x:hidden;
          text-overflow:ellipsis;
        }
      }
    }
  }
  .btnDiv{
    // @include wh(100%, 50px);
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      width: 100px;
      height: 23.47px;
      border-radius: 100px;
      box-shadow: 0px 9px 10px 0px rgba(91, 162, 255, 0.33);
      background: -webkit-linear-gradient(left, #4d90f4 , #57c1ff); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #4d90f4, #57c1ff); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #4d90f4, #57c1ff); /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #4d90f4 , #57c1ff); /* 标准的语法（必须放在最后） */
      line-height: 18px;
      color: rgba(255, 255, 255, 1);
      font-size: 13px;
      text-align: center;
      font-family: PingFangSC-Medium;
    }
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  .ulDiv::-webkit-scrollbar {
    width: 5px;
    border-radius: 2.5px;
    background-color: #f5f5f5;
  }
  /*定义滑块颜色、内阴影及圆角*/
  .ulDiv::-webkit-scrollbar-thumb  {
    border-radius: 2.5px;
    background-color: #ECF1F5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  .ulDiv::-webkit-scrollbar-track {
    border-radius: 2.5px;
    background-color: #f5f5f5;
  }
}
</style>
