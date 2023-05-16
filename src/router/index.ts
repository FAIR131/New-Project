import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue';

 const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      component: AppLayout,
      children:[     
        {
          path: '/',
          name: 'HomeDashboard',
          component: ()=>import('@/views/HomeDashboard.vue')
        },
      {
          path: '/BasicInformation/MaterialFile',
          name: 'MaterialFile',
          component: () => import('@/views/BasicInformation/MaterialFile.vue')
      },
      {
          path: '/BasicInformation/SectionFile',
          name: 'SectionFile',
          component: () => import('@/views/BasicInformation/SectionFile.vue')
      },
      {
          path: '/BasicInformation/TeamFile',
          name: 'TeamFile',
          component: () => import('@/views/BasicInformation/TeamFile.vue')
      },
      {
          path: '/SupplyChain/ReceiverList',
          name: 'ReceiverList',
          component: () => import('@/views/SupplyChain/ReceiverList.vue')
      },
      {
          path: '/SupplyChain/SupplyOrder',
          name: 'SupplyOrder',
          component: () => import('@/views/SupplyChain/supplyOrder.vue')
      },
      {
          path: '/SupplyChain/ProductionOrder',
          name: 'ProductionOrder',
          component: () => import('@/views/SupplyChain/ProductionOrder.vue')
      },
      {
          path: '/APS/CapacityRequirement',
          name: 'CapacityRequirement',
          component: () => import('@/views/APS/CapacityRequirements.vue')
      },
      {
          path: '/APS/ResourceManagement',
          name: 'ResourceManagement',
          component: () => import('@/views/APS/ResourceManagement.vue')
      },
      {
          path: '/APS/FactoryCalendar',
          name: 'FactoryCalendar',
          component: () => import('@/views/APS/FactoryCalendar.vue')
      },
      {
          path: '/APS/ScheduleManagement',
          component: ()=>import('@/views/APS/ScheduleManagement.vue'),
          children:[
            {
                path: '/APS/ScheduleManagement',
                component: ()=>import('@/views/APS/menus/OrderView.vue')
              },
            {
                path: '/APS/ScheduleManagement/SecManagement',
                component: ()=>import('@/views/APS/menus/SecManagement.vue')
              },
            {
                path: '/APS/ScheduleManagement/TeamView',
                component: ()=>import('@/views/APS/menus/TeamView.vue')
              },
            {
                path: '/APS/ScheduleManagement/SevenDayPlan',
                component: ()=>import('@/views/APS/menus/SevenDayPlan.vue')
              },
        ]
      },
      {
          path: '/MES/ProcessDispatch',
          name: 'ProcessDispatch',
          component: () => import('@/views/MES/ProcessDispatch.vue')
      },
      {
          path: '/MES/ProcessInspection',
          name: 'ProcessInspection',
          component: () => import('@/views/MES/ProcessInspection.vue')
      },
      {
          path: '/MES/ProcessReport',
          name: 'ProcessReport',
          component: () => import('@/views/MES/ProcessReport.vue')
      },
      {
          path: '/PieceRateWage/WorkerWages',
          name: 'WorkerWages',
          component: () => import('@/views/PieceRateWage/WorkerWages.vue')
      },
      ]
    },
   
  ]



const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
