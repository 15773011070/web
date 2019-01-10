import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import login from '../components/login'
import content from '../components/content'
import companyManagement from '../components/pages/companyManagement'
import businessStaff from '../components/pages/companyManageRouter/businessStaff'
import financeSales from '../components/pages/companyManageRouter/financeSales'
import financeRefund from '../components/pages/companyManageRouter/financeRefund'
import financeWithdraw from '../components/pages/companyManageRouter/financeWithdraw'
import agencyStatus from '../components/pages/companyManageRouter/agencyStatus'
import maintainerOnline from '../components/pages/companyManageRouter/maintainerOnline'
import maintainerUseRate from '../components/pages/companyManageRouter/maintainerUseRate'
import storeClerkStatus from '../components/pages/companyManageRouter/storeClerkStatus'
import storeClerkStatistics from '../components/pages/companyManageRouter/storeClerkStatistics'
import onlineMarketing from '../components/pages/companyManageRouter/onlineMarketing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          redirect: '/lg'
        },
        {
          path: 'lg',
          component: login
        },
        {
          path: 'ct',
          component: content,
          children: [
            {
              path: '',
              redirect: '/ct/cm'
            },
            {
              path: 'cm',
              component: companyManagement,
              children: [
                {
                  path: '',
                  redirect: '/ct/cm/businessStaff'
                },
                {
                  path: 'businessStaff',
                  component: businessStaff
                },
                {
                  path: 'financeSales',
                  component: financeSales
                },
                {
                  path: 'financeRefund',
                  component: financeRefund
                },
                {
                  path: 'financeWithdraw',
                  component: financeWithdraw
                },
                {
                  path: 'agencyStatus',
                  component: agencyStatus
                },
                {
                  path: 'maintainerOnline',
                  component: maintainerOnline
                },
                {
                  path: 'maintainerUseRate',
                  component: maintainerUseRate
                },
                {
                  path: 'storeClerkStatus',
                  component: storeClerkStatus
                },
                {
                  path: 'storeClerkStatistics',
                  component: storeClerkStatistics
                },{
									path:'onlineMarketing',
									component: onlineMarketing
								}
              ]
            }
          ]
        }
      ]
    }
  ]
})
