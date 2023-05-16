<script setup lang="ts">
import TabMenu from 'primevue/tabmenu';

const nestedRouteItems = ref([
  {
    label: "订单视图",
    to: "/APS/ScheduleManagement",
  },
  {
    label: "排程",
    to: "/APS/ScheduleManagement/SecManagement",
  },
  {
    label: "班组视图",
    to: "/APS/ScheduleManagement/TeamView",
  },
  {
    label: "7日计划",
    to: "/APS/ScheduleManagement/SevenDayPlan",
  },
]);
</script>
<template>
  <div class="grid">
    <div class="col-12">
            <div class="card card-w-title">
                <TabMenu :model="nestedRouteItems" />
                <router-view />
            </div>
        </div>
   
  </div>
</template>
