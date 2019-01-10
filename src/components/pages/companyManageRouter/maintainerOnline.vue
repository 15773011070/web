// 运维模块————设备在线情况
<template>
  <div class="bgDiv">
    <!-- <div>千秋功名，一世葬你，玲珑社稷，可笑却无君王命。 [流水统计]</div> -->
    <div class="leftDiv"  :style="leftDivStyleObj" ref="leftDiv">
      <div class="tableDiv" :style="tableDivStyleObj">
        <uwo-table-one :tableThData = 'tableThData1' :tableTdData = 'tableTdData1'></uwo-table-one>
      </div>
      <div class="pageDiv" :style="pageDivStyleObj">
        <uwo-paging></uwo-paging>
      </div>
    </div>
    <div class="rightDiv">
      <div class="headTitle">
        <uwo-table-title :headData = 'headData'></uwo-table-title>
      </div>
      <div class="contentDiv" :style="contentDivStyleObj">
        <uwo-table-one :tableThData = 'tableThData2' :tableTdData = 'tableTdData2'></uwo-table-one>
      </div>
    </div>
  </div>
</template>

<script>
import uwoTableOne from '../.././commen/tableOne'
import uwoTableTitle from '../.././commen/tableTitle'
import uwoPaging from '../.././commen/paging'
import jsonp from '../../../service/Jsonp'
export default {
  data () {
    return {
      leftDivStyleObj: {// 初始化宽度
        width: ''
      },
      tableDivStyleObj: {// 初始化高度
        height: ''
      },
      pageDivStyleObj: {// 初始化宽度
        width: ''
      },
      contentDivStyleObj: {
        height: ''
      },
      tableThData1: jsonp.maintainerOnlineTable.thData1,
      tableTdData1: jsonp.maintainerOnlineTable.tdData1,
      headData: jsonp.maintainerOnlineTable.headData,
      tableThData2: jsonp.maintainerOnlineTable.thData2,
      tableTdData2: jsonp.maintainerOnlineTable.tdData2
    }
  },
  created () {
    this.getCss()
    window.addEventListener('resize', this.getCss)
  },
  // 销毁
  destroyed () {
    window.removeEventListener('resize', this.getCss)
  },
  methods: {
    // 设置初始化左侧宽度方法
    getCss () {
      this.$store.commit('getWidthAndHeight')
      let objCss = this.$store.state.objCss
      let screenWidth = objCss.screenWidth
      let sideListWidth = objCss.sideListWidth
      let concentRightWidth = objCss.concentRightWidth
      let screenHeight = objCss.screenHeight
      let uwoHeaderHeight = objCss.uwoHeaderHeight
      let headerDivHeight = objCss.headerDivHeight
      let pageDivHeight = objCss.pageDivHeight
      // let spaceDistance = objCss.spaceDistance
      this.leftDivStyleObj.width = screenWidth - (sideListWidth + concentRightWidth) + 'px'
      this.pageDivStyleObj.width = screenWidth - (sideListWidth + concentRightWidth) + 'px'
      this.tableDivStyleObj.height = screenHeight - (uwoHeaderHeight + headerDivHeight + pageDivHeight) + 'px'
      this.contentDivStyleObj.height = screenHeight - (uwoHeaderHeight + headerDivHeight + pageDivHeight) + 'px'
    }
  },
  components: {
    uwoTableOne,
    uwoTableTitle,
    uwoPaging
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin";
.bgDiv {
  background: #ecf1f5;
  @include wh(100%,100%);
  .leftDiv {
    height: 100%;
    background: #ffffff;
    border-radius: .5rem;
    margin-right: 10px;
    float: left;
    overflow-y: hidden;
    overflow-x: auto;
    position: relative;
    .tableDiv{
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 5px;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    .tableDiv::-webkit-scrollbar {
      height: 5px;
      border-radius: 2.5px;
      background-color: #f5f5f5;
    }
    /*定义滑块颜色、内阴影及圆角*/
    .tableDiv::-webkit-scrollbar-thumb  {
      border-radius: 2.5px;
      background-color: #ECF1F5;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    .tableDiv::-webkit-scrollbar-track {
      border-radius: 2.5px;
      background-color: #f5f5f5;
    }
    .pageDiv{
      background: green;
      height: 50px;
      position: absolute;
      bottom: 0px;
    }
  }
  .rightDiv {
    @include wh(370px, 100%);
    background: #ffffff;
    float: left;
    overflow: hidden;
    border-radius: .5rem;
    padding-bottom: 10px;
    .headTitle{
      @include wh(100%, 40px);
    }
    .contentDiv{
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 5px;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    .contentDiv::-webkit-scrollbar {
      height: 5px;
      border-radius: 2.5px;
      background-color: #f5f5f5;
    }
    /*定义滑块颜色、内阴影及圆角*/
    .contentDiv::-webkit-scrollbar-thumb  {
      border-radius: 2.5px;
      background-color: #ECF1F5;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    .contentDiv::-webkit-scrollbar-track {
      border-radius: 2.5px;
      background-color: #f5f5f5;
    }
  }
}
</style>
