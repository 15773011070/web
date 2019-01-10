// eslint-disable-next-line

/* eslint-disable */
import vue from 'vue';
import vuex from 'vuex';
//import state from './state.js';
// import * as getters from './getters.js';
// import mutations from './mutations.js';
// import actions from './actions.js';

vue.use(vuex);

// const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false

export default new vuex.Store({
  state: {
    sideList: [
      {
        side_id: 1,
        side_name: '公司管理',
        side_url: '',
        side_nav: [],
        content: [
          {
            class_id: 1,
            class_name: '商务模块',
            class_img: require('../assets/img/business_img.png'),
            _expanded: false,
            class_content: [
              {
                content_name: '商务人员情况',
                content_router: '/ct/cm/businessStaff',
                _change: false
              }
            ]
          },
          {
            class_id: 2,
            class_name: '财务模块',
            class_img: require('../assets/img/finance_img.png'),
            _expanded: false,
            class_content: [
              {
                content_name: '流水统计',
                content_router: '/ct/cm/financeSales',
                _change: false
              },
              {
                content_name: '退款统计',
                content_router: '/ct/cm/financeRefund',
                _change: false
              },
              {
                content_name: '提现统计',
                content_router: '/ct/cm/financeWithdraw',
                _change: false
              }
            ]
          },
          {
            class_id: 3,
            class_name: '承载方模块',
            class_img: require('../assets/img/agency_img.png'),
            _expanded: false,
            class_content: [
              {
                content_name: '承载方情况',
                content_router: '/ct/cm/agencyStatus',
                _change: false
              }
            ]
          },
          {
            class_id: 4,
            class_name: '运维模块',
            class_img: require('../assets/img/maintainer_img.png'),
            _expanded: false,
            class_content: [
              {
                content_name: '设备在线情况',
                content_router: '/ct/cm/maintainerOnline',
                _change: false
              },
              {
                content_name: '设备使用情况',
                content_router: '/ct/cm/maintainerUseRate',
                _change: false
              }
            ]
          },
          {
            class_id: 5,
            class_name: '仓库模块',
            class_img: require('../assets/img/maintainer_img.png'),
            _expanded: false,
            class_content: [
              {
                content_name: '基本情况统计',
                content_router: '/ct/cm/storeClerkStatus',
                _change: false
              },
              {
                content_name: '出入库统计',
                content_router: '/ct/cm/storeClerkStatistics',
                _change: false
              }
            ]
          }
        ]
      }
    ],
    objCss: {
      screenWidth: '',
      screenHeight: '',
      uwoHeaderHeight: '',
      headerDivHeight: '',
      tableHeadHeight: '',
      pageDivHeight: '',
      sideListWidth: '',
      concentRightWidth: '',
      spaceDistance: '',
    }
  },
  mutations: {
    getWidthAndHeight(state) {
      //获取屏幕宽高
      state.objCss.screenWidth = window.innerWidth
      state.objCss.screenHeight = window.innerHeight
      state.objCss.uwoHeaderHeight = 100
      state.objCss.headerDivHeight = 60
      state.objCss.tableHeadHeight = 40
      state.objCss.pageDivHeight = 70
      state.objCss.sideListWidth = 230
      state.objCss.concentRightWidth = 370
      state.objCss.spaceDistance = 10
    },
    // 浏览器导航添加
    addArray(state, playload) {
      state.sideList[0].side_nav.push(playload)
    },
    initCss(state) {
      // 左侧导航栏样式初始化
      state.sideList.forEach((side, sideIndex, array) => {
        side.content.forEach((clazz, clazzIndex, arr) => {
          clazz.class_content.forEach((currentValue, index, array) => {
            currentValue._change = false
          })
        })
      })
    }
  }
})
