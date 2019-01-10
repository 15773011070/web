// 左侧折叠菜单
<template>
  <div class="bg">
    <ul>
      <li class="liFather" v-for="sideFather in sideList" :key="sideFather.side_id">
        <h3>
          <span class="slotLeft"></span>
          {{sideFather.side_name}}
          <span class="slotRight"></span>
        </h3>
        <ul class="ulDiv">
          <li class="liSon" v-for="clazz in sideFather.content" :key="clazz.class_id">
            <h5 @click.stop.prevent="expandClazzToggle(clazz)">
              <img class="liSonImg" :src="clazz.class_img" alt="clazz.class_name">
              {{clazz.class_name}}
              <img
                class="arrow-wrapper"
                :src="clazz._expanded ? background_img.arrow_up : background_img.arrow_down"
              >
            </h5>
            <ul v-show="clazz._expanded">
              <li
                class="liGrandSon"
                :class="classContent._change ? 'activeCss' :'normalCss'"
                v-for="classContent in clazz.class_content"
                :key="classContent.key"
                @click.stop.prevent="changeCss(classContent)"
              >
                <span class="spanLeft"  :style="{'background':classContent._change ? 'rgba(255, 255, 255, 1)':'#569EF7'}"></span>
                {{classContent.content_name}}
                <img class="spanRight" :src="classContent._change ? background_img.spanWhite : background_img.spanBlue">
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      changeColor: false,
      background_img: {
        arrow_up: require('../../assets/img/side_up.png'),
        arrow_down: require('../../assets/img/side_down.png'),
        spanBlue: require('../../assets/img/side_right_blue.png'),
        spanWhite: require('../../assets/img/side_right_white.png')
      },
      sideList: this.$store.state.sideList,
      addFlag: false
    }
  },
  created () {
    this.normalizedCourseList()
  },
  methods: {
    /** 点击扩展收缩 */
    expandClazzToggle (clazz) {
      clazz._expanded = !clazz._expanded
    },
    normalizedCourseList () {
      this.sideList.forEach((side, sideIndex, array) => {
        side.content.forEach((clazz, clazzIndex, arr) => {
          if (sideIndex === 0 && clazzIndex === 0) {
            /** 默认所选列 */
            clazz._expanded = true
            clazz.class_content.forEach((currentValue, index, array) => {
              if (index === 0) {
                currentValue._change = true
              }
            })
          }
        })
      })
    },
    /** 样式背景色初始化 */
    initCss () {
      // 左侧导航栏样式初始化
      this.$store.commit('initCss')
      // 上部导航栏样式初始化
      var sideNavArray = this.$store.state.sideList[0].side_nav
      sideNavArray.forEach((item, itemIndex, items) => {
        item._change = false
      })
    },
    /** 显示点击列 */
    changeCss (classContent) {
      if (!classContent._change) {
        this.initCss()
        classContent._change = !classContent._change
        var sideNavArray = this.$store.state.sideList[0].side_nav
        if (sideNavArray.length === 0) {
          this.addFlag = true
        } else {
          for (var i = 0; i < sideNavArray.length; i++) {
            if (sideNavArray[i]._name === classContent.content_name) {
              this.addFlag = false
              sideNavArray[i]._change = true
              break
            } else {
              this.addFlag = true
            }
          }
        }
        var playload = {
          _change: true,
          _name: classContent.content_name,
          _router: classContent.content_router
        }
        if (this.addFlag) {
          this.$store.commit('addArray', playload)
        }
        this.$router.push(classContent.content_router)
      }
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/style/mixin";
.bg {
  @include wh(100%, 100%);
  .liFather {
    background: #ffffff;
    @include wh(100%, 100%);
    h3 {
      @include wh(100%, auto);
      padding-top: 1rem;
      color: rgba(77, 144, 245, 1);
      font-size: 1rem;
      text-align: center;
      font-family: PingFangSC-Medium;
      cursor: pointer;
      span {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        margin: 0.4rem 0.2rem;
        background-color: rgba(77, 144, 245, 1);
      }
      .slotLeft {
        float: left;
      }
      .slotRight {
        float: right;
      }
    }
    .ulDiv{
      width: 100%;
      overflow: hidden;
      .liSon {
      background: #f5f5f5;
      padding: 0.5rem 0.3rem;
      border-radius: 0.56rem;
      margin: 1rem auto;
      h5 {
        @include wh(100%, auto);
        cursor: pointer;
        color: rgba(77, 144, 245, 1);
        font-size: 0.5rem;
        text-align: center;
        font-family: PingFangSC-Medium;
        .liSonImg {
          @include wh(auto, 0.98rem);
          float: left;
          margin-right: 0.1rem;
        }
        .arrow-wrapper {
          float: right;
          padding-top: 0.15rem;
          @include wh(.7rem, auto);
        }
      }
      .activeCss{
        background: #569EF7;
        color: #FFFFFF;
      }
      .normalCss{
        background-color: rgba(255, 255, 255, 1);
        color: rgba(77, 144, 245, 1);
      }
      .liGrandSon {
        padding: 0.2rem 0.2rem;
        border-radius: 0.56rem;
        margin-top: 0.6rem;
        cursor: pointer;
        font-size: 0.5rem;
        text-align: center;
        font-family: PingFangSC-Medium;
        .spanLeft {
          margin: 0.3rem 0.2rem;
          float: left;
          width: 0.4rem;
          height: 0.45rem;
          border-radius: 0.2rem;
          background-color: rgba(77, 144, 245, 1);
        }
        .spanRight {
          margin: 0.2rem auto;
          width: 0.8rem;
          height: auto;
          float: right;
        }
      }
    }
    }
  }
}
</style>
