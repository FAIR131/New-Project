<script setup lang="ts">
import TabMenu from "primevue/tabmenu";
import Dialog from "primevue/dialog";
import SecduleDialog from "./components/SecduleDialog.vue";

const nestedRouteItems = ref([
  {
    label: "订单视图",
    to: "/APS/ScheduleManagement",
  },
 /*  {
    label: "排程",
    to: "/APS/ScheduleManagement/SecManagement",
  }, */
  {
    label: "班组视图",
    to: "/APS/ScheduleManagement/TeamView",
  },
  {
    label: "7日计划",
    to: "/APS/ScheduleManagement/SevenDayPlan",
  },
]);
const visible = ref(false);
</script>
<template>
  <div class="grid">
    <div class="col-12">
      <div class="card card-w-title mb-3 relative">
        <TabMenu :model="nestedRouteItems" />
        <router-view />

        <div class="btn">
          <pre-Button
            label="新增排程"
            icon="pi pi-external-link"
            @click="visible = true"
          />
          <Dialog
            v-model:visible="visible"
            maximizable
            modal
            header="新增排程"
            :style="{ width: '80vw' }"
          >
            <SecduleDialog/>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  position: absolute;
  top: 2.5rem;
  right: 2rem;
}
</style>
