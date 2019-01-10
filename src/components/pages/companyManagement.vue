// 公司管理模块
<template>
  <div class="bgDiv">
    <div class="headerDiv">
      <div class="navbarDiv">
        <ul>
          <li
            v-for="(item,index) in navList"
            :key="item.number"
            :style="{'background':item._change ? '#56BFFE':'#F5F5F5','color':item._change ? '#FFFFFF':'#333333'}"
            @click.stop.prevent="changeCss(item)"
          >
            {{item._name}}
            <span
              @click.stop.prevent="closeNav(item,index)"
              v-show="navList.length === 1 ? false : true"
            >x</span>
          </li>
        </ul>
      </div>
      <div class="btnDiv">
        <button>导出报表</button>
        <button>
          <img
            src="../../assets/img/btn_search.png"
            style="width:1.5rem;float:left;margin-top:0.2rem;margin-left:0.5rem"
          >搜索
        </button>
        <button>
          <img
            src="../../assets/img/btn_reset.png"
            style="width:1.5rem;float:left;margin-top:0.2rem;margin-left:0.5rem"
          >重置
        </button>
      </div>
    </div>
    <div class="contentDiv" :style="contentStyleObj">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import uwoSide from '.././commen/sideList'
export default {
  data () {
    return {
      contentStyleObj: {// 初始化高度
        height: ''
      },
      navList: this.$store.state.sideList[0].side_nav
    }
  },
  created () {
    this.initData()
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
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
      let screenHeight = objCss.screenHeight
      let uwoHeaderHeight = objCss.uwoHeaderHeight
      let headerDivHeight = objCss.headerDivHeight
      let spaceDistance = objCss.spaceDistance
      this.contentStyleObj.height = screenHeight - (uwoHeaderHeight + headerDivHeight + spaceDistance) + 'px'
    },
    // 导航数据初始化
    initData () {
      var content = this.$store.state.sideList[0].content[0].class_content[0]
      var obj = {
        _change: true,
        _name: content.content_name,
        _router: content.content_router
      }
      if (this.navList.length === 0) {
        this.navList.push(obj)
      }
    },
    // 去除所有点击样式
    initCss () {
      this.navList.forEach((item, itemIndex, items) => {
        item._change = false
      })
    },
    // 点击改变样式
    changeCss (item) {
      this.initCss()
      item._change = true
      this.$store.commit('initCss')
      var sideList = this.$store.state.sideList[0]
      sideList.content.forEach((clazz, clazzIndex, array) => {
        clazz.class_content.forEach((currentValue, index, array) => {
          if (item._name === array[index].content_name) {
            array[index]._change = true
          }
        })
      })
      this.$router.push(item._router)
    },
    // 关闭浏览器导航
    closeNav (item, index) {
      if (item._change) {
        if (index === this.navList.length - 1) {
          this.navList.splice(index, 1)
          index--
          this.changeCss(this.navList[index])
        } else {
          this.navList.splice(index, 1)
          this.changeCss(this.navList[index])
        }
      } else {
        this.navList.splice(index, 1)
      }
    }
  },
  components: {
    uwoSide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/style/mixin";
.bgDiv {
  @include wh(100%, 100%);
  // background: #ecf1f5;
  overflow: hidden;
  .headerDiv {
    @include wh(100%, 60px);
    margin-bottom: 10px;
    background: #ffffff;
    white-space: nowrap;
    overflow-y: hidden;
    display: flex;
    .navbarDiv {
      @include wh(75%, 2rem);
      // float: left;
      ul {
        @include wh(100%, 2rem);
        margin: 1rem auto;
        display: flex;
        align-items: center;
        overflow-x: auto;
        li {
          @include wh(7rem, 1.5rem);
          padding: 0 1rem;
          margin: 0 0.5rem;
          background: #f5f5f5;
          color: #333333;
          border-radius: 0.45rem;
          line-height: 1.5rem;
          float: left;
          white-space: nowrap;
          text-align: center;
          cursor: pointer;
          span {
            margin-left: 0.5rem;
            position: relative;
            top: -0.05rem;
            color: #333333;
          }
        }
      }
    }
    .btnDiv {
      @include wh(24%, 2rem);
      // float: left;
      margin: 1rem auto;
      overflow-x: auto;
      white-space: nowrap;
      button {
        @include wh(6rem, 1.77rem);
        border-radius: 5rem;
        margin: 0 0.5rem;
        color: #ffffff;
        padding: 0.2 2.5rem;
        font-size: 1.38rem;
        white-space: nowrap;
        background: -webkit-linear-gradient(
          left,
          #4d90f4,
          #57c1ff
        ); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(
          left,
          #4d90f4,
          #57c1ff
        ); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(
          left,
          #4d90f4,
          #57c1ff
        ); /* Firefox 3.6 - 15 */
        background: linear-gradient(
          left,
          #4d90f4,
          #57c1ff
        ); /* 标准的语法（必须放在最后） */
      }
    }
  }
  .contentDiv {
    padding-bottom: 10px;
    // background: #57c1ff;
    // overflow: scroll;
  }
}
</style>
