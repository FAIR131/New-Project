<script setup lang="ts">

import AppMenuItem from "./AppMenuItem.vue";
import {type IMenu} from '@/types/Layout/index'

const model:IMenu[]= [
  {
    label: "首页",
    items: [{ label: "首页", name:'HomeDashboard',to: "/" }],
  },
  {
    label: "基础资料",
    items: [
      { label: "物料档案", name:'MaterialFile',to: "/BasicInformation/MaterialFile" },
      { label: "工段档案", name:'SectionFile',to: "/BasicInformation/SectionFile" },
      { label: "班组档案", name:'TeamFile',to: "/BasicInformation/TeamFile" },
    ],
  },
  {
    label: "供应链",
    items: [
      { label: "收料单", name:'ReceiverList',to: "/SupplyChain/ReceiverList"},
      { label: "供应订单", name:'SupplyOrder',to: "/SupplyChain/SupplyOrder"},
      { label: "生产订单", name:'ProductionOrder',to: "/SupplyChain/ProductionOrder"},
    ],
  },
  {
    label: "APS",
    items: [
      { label: "能力需求", name:'CapacityRequirement',to: "/APS/CapacityRequirement" },
      { label: "资源管理", name:'ResourceManagement',to: "/APS/ResourceManagement" },
      { label: "工厂日历", name:'FactoryCalendar',to: "/APS/FactoryCalendar" },
      { label: "排程管理", name:'ScheduleManagement',to: "/APS/ScheduleManagement" },
    ],
  },
  {
    label: "MES",
    // name:,to: '/pages',
    items: [
      { label: "工序派工", name:'ProcessDispatch',to: "/MES/ProcessDispatch" },
      { label: "工序报工", name:'ProcessInspection',to: "/MES/ProcessInspection" },
      { label: "工序检验", name:'ProcessReport',to: "/MES/ProcessReport" },
    ],
  },
  {
    label: "计件工资",
    items: [
      { label: "工人工资", name:'WorkerWages',to: "/PieceRateWage/WorkerWages" },
    ],
  },
];
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item
        v-if="!item.separator"
        :item="item"
        :index="i"
      ></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
