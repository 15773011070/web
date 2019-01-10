// 顶部头部栏
<template>
  <div class="bg">
    <div class="hLeft">
      <p>U我-后台管理系统</p>
    </div>
    <div class="hCenter">
      <ul>
        <li :class="{onActive: isTrue==1}" @click="routerToCompanyManagement()" v-show="menuShow.companyManagement">
          <img src="../../assets/img/h1.png" alt="公司管理">
          <p>公司管理</p>
        </li>
        <li :class="{onActive: isTrue==2}" @click="routerToDataVisualization()" v-show="menuShow.dataVisualization">
          <img src="../../assets/img/h2.png" alt="数据可视化">
          <p>数据可视化</p>
        </li>
        <li :class="{onActive: isTrue==3}" @click="routerToUserManagement()" v-show="menuShow.userManagement">
          <img src="../../assets/img/h3.png" alt="用户管理">
          <p>用户管理</p>
        </li>
        <li :class="{onActive: isTrue==4}" @click="routerToOnlineMarketing()" v-show="menuShow.onlineMarketing">
          <img src="../../assets/img/h4.png" alt="线上营销">
          <p>线上营销</p>
        </li>
        <li :class="{onActive: isTrue==5}" @click="routerToSystemManagement()" v-show="menuShow.systemManagement">
          <img src="../../assets/img/h5.png" alt="系统管理">
          <p>系统管理</p>
        </li>
      </ul>
    </div>
    <div class="hRight">
      <div class="userDiv">
        <p title="多情自古空余恨,此恨绵绵无绝期">多情自古空余恨,此恨绵绵无绝期</p>
        <div>
          <img src="../../assets/img/user.png" alt="头像">
        </div>
      </div>
      <div class="setDiv">
        <ul>
          <li>
            <img src="../../assets/img/h_msg.png" alt="信息">
            <span></span>
          </li>
          <li>
            <img src="../../assets/img/h_lock.png" alt="修改密码">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTrue: 1,
      lgmsg: '',
      menuShow: {
        companyManagement: false,
        dataVisualization: false,
        userManagement: false,
        onlineMarketing: false,
        systemManagement: false
      }
    }
  },
  created () {
    this.accessContol()
  },
  methods: {
    // 权限控制
    accessContol () {
      console.log(this.$store.state.sideList)
      let sideList = []
      var menu = JSON.parse(window.sessionStorage.getItem('lgmsg')).menus.children
      menu.forEach(children => {
        let obj = {}
        obj.side_id = children.id
        obj.side_name = children.menuName
        obj.side_nav = []
        obj.content = []
        sideList.push(obj)
        console.log(children)
        console.log(sideList)
      })
      // var menuArray = JSON.parse(window.sessionStorage.getItem('lgmsg')).menus.children
      // let menuName = []
      // for (var i = 0; i < menuArray.length; i++) {
      //   menuName.push(menuArray[i].menuName)
      // }
      // this.menuShow.companyManagement = menuName.includes('公司管理')
      // this.menuShow.dataVisualization = menuName.includes('数据可视化')
      // this.menuShow.userManagement = menuName.includes('用户管理')
      // this.menuShow.onlineMarketing = menuName.includes('线上营销')
      // this.menuShow.systemManagement = menuName.includes('系统管理')
    },
    /* 头部导航路由切换 */
    routerToCompanyManagement () {
      this.isTrue = 1
    },
    routerToDataVisualization () {
      this.isTrue = 2
    },
    routerToUserManagement () {
      this.isTrue = 3
    },
    routerToOnlineMarketing () {
      this.isTrue = 4
    },
    routerToSystemManagement () {
      this.isTrue = 5
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
  background: -webkit-linear-gradient(#57c1ff, #4d90f4); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#57c1ff, #4d90f4); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#57c1ff, #4d90f4); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    #57c1ff,
    #4d90f4
  ); /* 标准的语法（必须放在最后） */
  .hLeft {
    float: left;
    @include wh(20%, 3.25rem);
    margin-top: 3rem;
    p {
      color: rgba(255, 255, 255, 1);
      font-size: 1.5rem;
      text-align: center;
      margin-left: 0.5rem;
      font-family: PingFangSC-Semibold;
    }
  }
  .hCenter {
    float: left;
    //background: red;
    margin-top: 2rem;
    ul {
      @include wh(100%, 100%);
      display: flex;
      li {
        @include wh(5.63rem, 4.25rem);
        margin: auto 1rem;
        padding-top: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 28.63px;
        border-radius: 0.5rem 0.5rem 0 0;
        img {
          @include wh(1.44rem, 1.56rem);
        }
        p {
          @include wh(100%, 1.75rem);
          color: rgba(255, 255, 255, 1);
          text-align: center;
          font-family: PingFangSC-Medium;
          line-height: 1.75rem;
        }
      }
      .onActive {
        background: -webkit-linear-gradient(
          #4d90f4,
          #57c1ff
        ); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(
          #4d90f4,
          #57c1ff
        ); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(
          #4d90f4,
          #57c1ff
        ); /* Firefox 3.6 - 15 */
        background: linear-gradient(
          #4d90f4,
          #57c1ff
        ); /* 标准的语法（必须放在最后） */
      }
    }
  }
  .hRight {
    float: right;
    @include wh(20%, 100%);
    .userDiv {
      @include wh(50%, 100%);
      float: left;
      display: flex;
      p {
        @include wh(80%,100%);
        color: rgba(255, 255, 255, 1);
        cursor:pointer;
        text-align: right;
        line-height: 6.25rem;
        font-size: 1.13rem;
        margin-right: 1rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-family: PingFangSC-Regular;
      }
      div{
        @include wh(20%,100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        img{
          @include wh(2.5rem,2.5rem);
          border-radius:1.25rem;
        }
      }
    }
    .setDiv {
      @include wh(50%, 100%);
      float: left;
      ul{
        @include wh(100%, 100%);
        display: flex;
        margin-left: 15%;
        li{
          @include wh(3rem, 100%);
          display: flex;
          justify-content: center;
        }
        li:nth-of-type(1){
          position: relative;
          img{
            @include wh(1.35rem, 1.35rem);
            margin:auto 0;
          }
          span{
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 0.3rem;
            position: absolute;
            top: 3.2rem;
            right: 0.8rem;
            background-color: rgba(115, 212, 54, 1);
            box-shadow: 0rem 0.13rem 0.25rem 0rem rgba(106, 217, 36, 0.4);
          }
        }
        li:nth-of-type(2){
          img{
            @include wh(1.25rem, 1.35rem);
            margin:auto 0;
          }
        }
      }
    }
  }
}
</style>
