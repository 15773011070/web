<template>
  <div class="bg">
    <div class="loginDiv" v-if="showFlag">
      <h1>U我-后台管理系统</h1>
      <div class="bgDiv">
        <div class="h2Div">
          <h2>USER LOGN</h2>
        </div>
        <div class="inputDiv">
          <div class="userInput">
            <p>用户名</p>
            <p><input type="text" name="username" v-model="userName"></p>
          </div>
          <div class="passwordInput">
            <p>用户名</p>
            <p><input type="password" name="password" v-model="passWord"></p>
          </div>
        </div>
        <div class="btnDiv">
          <button @click.stop.prevent="loginRoute()">GO</button>
        </div>
      </div>
    </div>
    <div class="choiceDiv" v-else>
      <h1>请选择将使用的系统</h1>
      <div class="bgDiv">
        <div class="leftDiv">
          <div class="h2Div">
            <h2>公司管理</h2>
          </div>
          <div class="imgDiv">
            <h3><img src="../assets/img/login_logo1.png" alt="公司各数据管理"><p style="float:right">公司各数据管理</p></h3>
            <img src="../assets/img/login_img1.png" alt="公司各数据管理">
          </div>
          <div class="btnDiv">
            <button @click="$router.push('/ct')">GO</button>
          </div>
        </div>
        <hr>
        <div class="rightDiv">
          <div class="h2Div">
            <h2>管理驾驶舱</h2>
          </div>
          <div class="imgDiv">
            <h3><img src="../assets/img/login_logo2.png" alt="公司各数据管理"><p style="float:right">公司各数据管理</p></h3>
            <img src="../assets/img/login_img2.png" alt="公司各数据管理">
          </div>
          <div class="btnDiv">
            <button @click="enter()">GO</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '../service/getData'
export default {
  data () {
    return {
      showFlag: true,
      userName: '15575474176',
      passWord: '123456'
    }
  },
  methods: {
    loginRoute () {
      this.showFlag = !this.showFlag
      let obj = {
        username: this.userName,
        password: this.passWord
      }
      login(obj).then(res => {
        // debugger
        window.sessionStorage.setItem('lgmsg', JSON.stringify(res.data))
        console.log(res.data)
      })
    },
    enter () {
      alert('暂未开放权限')
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/style/mixin";
.bg {
  @include wh(100%, 100%);
  @include bis("../assets/img/login_bg.png");
  .loginDiv{
    @include wh(100%,55%);
    @include center;
    h1{
      @include wh(100%,10%);
      @include cl;
      top: -2.8rem;
      color: rgba(255, 255, 255, 1);
      font-size: 2.5rem;
      text-align: center;
      font-family: PingFangSC-Semibold;
    }
    .bgDiv{
      @include wh(29%,90%);
      min-width: 25rem;
      overflow: scroll;
      @include center;
      @include bis("../assets/img/login_bg2.png");
      .h2Div{
        @include wh(100%,20%);
        display: flex;
        justify-content: center;
        align-items: center;
        h2{
          line-height: 27px;
          text-align: center;
          color: rgba(98, 139, 200, 1);
          font-size: 27px;
          font-family: PingFangSC-Semibold;
        }
      }
      .inputDiv{
        @include wh(100%,60%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div{
          @include wh(60%,30%);
          margin-bottom:  1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          p{
            min-width: 16rem;
            height: 1.4rem;
            margin-bottom: .5rem;
            color: rgba(98, 139, 200, 1);
            font-size: 1rem;
            text-align: left;
            font-family: PingFangSC-Regular;
          }
          input{
            min-width: 16rem;
            height: 2rem;
            border-radius: 8px;
            background-color: rgba(242, 242, 242, 1);
            padding-left: 10px;
          }
        }
      }
      .btnDiv{
        @include wh(100%,25%);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 15%;
        button{
          width: 8rem;
          height: 2.5rem;
          border-radius: 5rem;
          font-size: 25px;
          text-align: center;
          font-family: PingFangSC-Semibold;
          box-shadow: 0px 9px 10px 0px rgba(91, 162, 255, 0.33);
          background: -webkit-linear-gradient(left, #5C9DFF , #56C1FF); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(right, #5C9DFF , #56C1FF); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(right, #5C9DFF , #56C1FF); /* Firefox 3.6 - 15 */
          background: linear-gradient(to right, #5C9DFF , #56C1FF); /* 标准的语法（必须放在最后） */
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  .choiceDiv{
    @include wh(100%,55%);
    @include center;
    h1{
      @include wh(100%,auto);
      @include center;
      top: -.5rem;
      color: rgba(255, 255, 255, 1);
      font-size: 2.5rem;
      text-align: center;
      font-family: PingFangSC-Semibold;
    }
    .bgDiv{
      @include center;
      padding-bottom: 1rem;
      max-height: 17rem;
      min-width: 31rem;
      overflow-y: scroll;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 14px 0px rgba(151, 151, 151, 0.3);
      display: flex;
      .leftDiv,.rightDiv{
        @include wh(100%,100%);
        .h2Div{
          @include wh(100%,25%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h2{
            line-height: 27px;
            text-align: center;
            color: rgba(98, 139, 200, 1);
            font-size: 27px;
            font-family: PingFangSC-Semibold;
            margin-top: 2rem;
          }
        }
        .imgDiv{
          @include wh(100%,50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: .4rem;
          padding-bottom: .7rem;
          h3{
            // @include wh(100%,100%);
            line-height: 27px;
            text-align: center;
            color: rgba(98, 139, 200, 1);
            font-size: 14px;
            font-family: PingFangSC-Semibold;
            img{
              @include wh(.8rem,auto);
              margin-top: 6.5%;
              margin-right: .5rem;
            }
          }
          img{
            @include wh(40%,auto);
            margin: .2rem 0;
          }
        }
        .btnDiv{
          @include wh(100%,25%);
          display: flex;
          justify-content: center;
          // align-items: center;
          button{
            width: 8rem;
            height: 2.5rem;
            border-radius: 5rem;
            font-size: 25px;
            text-align: center;
            font-family: PingFangSC-Semibold;
            box-shadow: 0px 9px 10px 0px rgba(91, 162, 255, 0.33);
            background: -webkit-linear-gradient(left, #5C9DFF , #56C1FF); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, #5C9DFF , #56C1FF); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, #5C9DFF , #56C1FF); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, #5C9DFF , #56C1FF); /* 标准的语法（必须放在最后） */
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      hr{
        @include wh(1px,4.1rem);
        background:#5BA2FF;
        opacity: 0.4;
        border-left: none;
        border-right: 1px solid rgba(91, 162, 255, 1);
        margin-top: 20%;
      }
    }
  }
}
</style>
