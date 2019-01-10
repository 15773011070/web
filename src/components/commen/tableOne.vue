// 基础表格模版
<template>
  <div class="bg" ref="bg" :style="{'min-width': (tableThData.length>6 )? '1500px' :'550px'}">
    <div class="table-head">
      <hr>
      <table>
        <thead>
          <!-- <hr> -->
          <tr>
            <th :style="{'border-left': index===0 ? 'none' : '1px solid #B6B6B6'}"
                style="line-height:1.5rem;"
            v-for="(item,index) in tableThData" :key="index">{{item}}</th>
          </tr>
          <!-- <hr> -->
        </thead>
      </table>
      <hr>
    </div>
    <div class="table-body" :style="tableBodyStyleObj">
      <table>
        <tbody>
          <tr v-for="(item,index) in dataNumbers" :key="index">
            <td v-for="(item,index) in tableTdData" :key="index">{{item}}</td>
          </tr>
          <tr style="color: green;">
            <td v-for="(item,index) in tableTdData" :key="index">{{item}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataNumbers: '',
      tableBodyStyleObj: {// 初始化高度
        height: ''
      }
    }
  },
  props: [
    'tableThData',
    'tableTdData'
  ],
  mounted () {
    this.getHeight()
    window.addEventListener('resize', this.getHeight)
    // console.log(c)
  },
  // 销毁
  destroyed () {
    window.removeEventListener('resize', this.getHeight)
  },
  methods: {
    // 设置初始化高度方法
    getHeight () {
      this.$store.commit('getWidthAndHeight')
      let objCss = this.$store.state.objCss
      let bgHeight = this.$refs.bg.clientHeight
      let spaceDistance = objCss.spaceDistance
      let tableHeadHeight = objCss.tableHeadHeight
      this.tableBodyStyleObj.height = bgHeight - tableHeadHeight - spaceDistance * 2 + 'px'
      this.dataNumbers = parseInt(bgHeight / 26) + 5
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.bg {
  @include wh(100%, 100%);
  background: #ffffff;
  margin: 0 5px;
  table{
    border-collapse:collapse;
    table-layout: fixed;
    tr{
      color: #333333;
      font-size: 0.7rem;
      line-height: 1.3rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      th,td{
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
      }
    }
  }
  .table-head{
    @include wh(100%, 40px);
    padding-right: 10px;
    background: #ffffff;
    margin-top: -5px;
    margin-bottom: 10px;
    padding-bottom: 1px;
    box-shadow: 0rem 0.45rem 0.5rem 0rem rgba(160, 160, 160, 0.2);
    hr{
      @include wh(100%, auto);
      border-top: 1px solid #ffffff;
      border-bottom: none;
    }
    table{
      @include wh(100%, 40px);
      thead {
        @include wh(auto, 40px);
        border-radius: 0.5rem;
        background-color: rgba(255, 255, 255, 1);
        // box-shadow: 0rem 0.45rem 0.5rem 0rem rgba(160, 160, 160, 0.2);
        margin-bottom: 2.5rem;
        color:rgba(51, 51, 51, 1)
      }
    }
  }
  .table-body {
    @include wh(100%, 100%);
    overflow-y: scroll;
    table{
      @include wh(100%, auto);
      td{
        border: 1px solid #B6B6B6;
      }
    }
  }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  .table-body::-webkit-scrollbar {
    width: 5px;
    border-radius: 2.5px;
    background-color: #f5f5f5;
  }
  /*定义滑块颜色、内阴影及圆角*/
  .table-body::-webkit-scrollbar-thumb  {
    border-radius: 2.5px;
    background-color: #ECF1F5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  .table-body::-webkit-scrollbar-track {
    border-radius: 2.5px;
    background-color: #f5f5f5;
  }
}
</style>
