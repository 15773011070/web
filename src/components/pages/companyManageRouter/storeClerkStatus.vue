// 仓库模块————基本情况统计
<template>
  <div class="bgDiv">
    <!-- <div>千秋功名，一世葬你，玲珑社稷，可笑却无君王命。 [流水统计]</div> -->
    <div class="leftDiv"  :style="leftDivStyleObj">
      <div class="topTable" :style="topTableStyleObj">
        <div class="headTitle">
          <uwo-table-title :headData = 'headData1'></uwo-table-title>
        </div>
        <div class="bodyDiv" :style="bodyDivStyleObj">
          <div class="tableDiv" :style="tableDivStyleObj">
            <uwo-table-one :tableThData = 'tableThData1' :tableTdData = 'tableTdData1'></uwo-table-one>
          </div>
          <div class="pageDiv" :style="pageDivStyleObj">
            <uwo-paging></uwo-paging>
          </div>
        </div>
      </div>
      <div style="height:10px;background:#ECF1F5;"></div>
      <div class="topTable" style="overflow:hidden" :style="topTableStyleObj">
        <div class="headTitle">
          <uwo-table-title :headData = 'headData2'></uwo-table-title>
        </div>
        <div class="bodyDiv" :style="bodyDivStyleObj">
          <div class="tableDiv" :style="tableDivStyleObj">
            <uwo-table-one :tableThData = 'tableThData2' :tableTdData = 'tableTdData2'></uwo-table-one>
          </div>
          <div class="pageDiv" :style="pageDivStyleObj">
            <uwo-paging></uwo-paging>
          </div>
        </div>
      </div>
    </div>
    <div class="rightDiv">
      <div class="topTable" :style="topTableStyleObj">
        <div class="headTitle">
          <uwo-table-title :headData = 'headData3'></uwo-table-title>
        </div>
        <div class="bodyDiv" :style="bodyDivStyleObj">
          <uwo-form-input :headList = 'headList3'></uwo-form-input>
        </div>
      </div>
      <div style="height:10px;background:#ECF1F5;"></div>
      <div class="topTable" :style="topTableStyleObj">
        <div class="headTitle">
          <uwo-table-title :headData = 'headData4'></uwo-table-title>
        </div>
        <div class="bodyDiv" :style="bodyDivStyleObj">
          <uwo-form-input :headList = 'headList4'></uwo-form-input>
        </div>
      </div>
    </div>
    <!-- <div class="rightDiv">
      <div class="headTitle">
        <uwo-table-title :headData = 'headData3'></uwo-table-title>
      </div>
      <div class="contentDiv" :style="contentDivStyleObj">
        <uwo-table-one :tableThData = 'tableThData2' :tableTdData = 'tableTdData2'></uwo-table-one>
      </div>
    </div> -->
  </div>
</template>

<script>
import uwoTableOne from '../.././commen/tableOne'
import uwoTableTitle from '../.././commen/tableTitle'
import uwoPaging from '../.././commen/paging'
import uwoFormInput from '../.././commen/formInput'
import jsonp from '../../../service/Jsonp'
export default {
  data () {
    return {
      leftDivStyleObj: {// 初始化宽度
        width: ''
      },
      topTableStyleObj: {// 初始化高度
        height: ''
      },
      bodyDivStyleObj: {// 初始化高度
        height: ''
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
      tableThData1: jsonp.storeClerkStatusTable.thData1,
      tableTdData1: jsonp.storeClerkStatusTable.tdData1,
      headData1: jsonp.storeClerkStatusTable.headData1,
      headData2: jsonp.storeClerkStatusTable.headData2,
      tableThData2: jsonp.storeClerkStatusTable.thData2,
      tableTdData2: jsonp.storeClerkStatusTable.tdData2,
      headData3: jsonp.storeClerkStatusTable.headData3,
      headList3: jsonp.storeClerkStatusTable.headList3,
      headData4: jsonp.storeClerkStatusTable.headData4,
      headList4: jsonp.storeClerkStatusTable.headList4
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
      let spaceDistance = objCss.spaceDistance
      let leftDivHeight = screenHeight - (uwoHeaderHeight + headerDivHeight + spaceDistance * 2) // 左侧盒子的高度
      let pageDivHeight = objCss.pageDivHeight
      this.leftDivStyleObj.width = screenWidth - (sideListWidth + concentRightWidth) + 'px' // 设置左侧盒子的宽度
      this.pageDivStyleObj.width = screenWidth - (sideListWidth + concentRightWidth) + 'px' // 设置翻页的宽度
      this.contentDivStyleObj.height = screenHeight - (uwoHeaderHeight + headerDivHeight + pageDivHeight) + 'px'
      // 左侧盒子的相关设置
      let topTableHeight = (leftDivHeight - 10) / 2
      let bodyDivHeight = topTableHeight - 40
      this.topTableStyleObj.height = topTableHeight + 'px' // 设置topTable盒子的高度
      this.bodyDivStyleObj.height = bodyDivHeight + 'px' // 设置bodyDiv盒子的高度
      this.tableDivStyleObj.height = bodyDivHeight - 50 + 'px' // 设置tableDiv盒子的高度
    }
  },
  components: {
    uwoTableOne,
    uwoTableTitle,
    uwoPaging,
    uwoFormInput
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
    // overflow-y: hidden;
    overflow-x: auto;
    position: relative;
    .topTable {
      overflow:hidden;
      .headTitle{
        @include wh(100%, 40px);
      }
      .bodyDiv{
        position: relative;
        .pageDiv{
        background: green;
        height: 50px;
        position: absolute;
        bottom: 0px;
    }
      }
    }
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
