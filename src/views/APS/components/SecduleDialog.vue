<script setup lang="ts">
import type { IColums, IDatas, ILinks } from "@/types/APS/ScheduleManagement";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import ScheduleManagementChart from "../components/ScheduleManagementChart.vue";
const data: IDatas[] = [
  {
    id: 1,
    OrderId: "ORDER01",
    machineId: "M01001",
    number: 1,
    request_delivery: "2023-07-18",
    text: "出图",
    start_date: "20-06-2023",
    end_date: "17-07-2023",
    open: true,
  },
  {
    id: 2,
    text: "机架",
    start_date: "21-06-2023",
    end_date: "23-06-2023",
    parent: 1,
  },
  {
    id: 3,
    text: "BOM",
    start_date: "22-06-2023",
    end_date: "27-06-2023",
    parent: 1,
  },
  {
    id: 4,
    text: "前道",
    start_date: "24-06-2023",
    end_date: "29-06-2023",
    parent: 1,
  },
  {
    id: 5,
    text: "后道",
    start_date: "25-06-2023",
    end_date: "28-06-2023",
    parent: 1,
  },
  {
    id: 6,
    OrderId: "ORDER02",
    machineId: "M01002",
    number: 1,
    request_delivery: "2023-06-30",
    text: "出图",
    start_date: "23-06-2023",
    end_date: "25-06-2023",
    open: true,
  },
  {
    id: 7,
    text: "机架",
    start_date: "24-06-2023",
    end_date: "28-06-2023",
    parent: 6,
  },
  {
    id: 8,
    text: "BOM",
    start_date: "29-06-2023",
    end_date: "30-06-2023",
    parent: 6,
  },
  {
    id: 9,
    text: "前道",
    start_date: "01-07-2023",
    end_date: "05-07-2023",
    parent: 6,
  },
  {
    id: 10,
    text: "后道",
    start_date: "03-07-2023",
    end_date: "09-07-2023",
    parent: 6,
  },
];
const links: ILinks[] = [
  { id: 1, source: 1, target: 2, type: "1" },
  { id: 2, source: 2, target: 3, type: "0" },
  { id: 3, source: 3, target: 4, type: "0" },
  { id: 4, source: 4, target: 5, type: "0" },

  { id: 5, source: 6, target: 7, type: "1" },
  { id: 6, source: 7, target: 8, type: "0" },
  { id: 7, source: 8, target: 9, type: "0" },
  { id: 8, source: 9, target: 10, type: "0" },
];

const gantColumns: IColums[] = [
  {
    name: "id",
    label: "ID",
    align: "center",
    width: "30",
  },
  {
    name: "OrderId",
    label: "订单号",
    align: "center",
    width: "60",
  },
  {
    name: "machineId",
    label: "机器号",
    align: "center",
    width: "60",
  },
  {
    name: "number",
    label: "数量",
    align: "center",
    width: "20",
  },
  {
    name: "request_delivery",
    label: "要求交期",
    align: "center",
    width: "90",
  },
  {
    name: "text",
    label: "任务项",
    tree: true,
    width: "90",
  },
  {
    name: "start_date",
    label: "计划开始时间",
    align: "center",
    width: "80",
  },
  {
    name: "end_date",
    label: "计划完工时间",
    align: "center",
    width: "80",
  },

  {
    name: "add",
    label: "",
    width: "30",
  },
];

const picChart1 = [5, 3, 5, 0, 6, 4, 3];
const picChart2 = [0, 0, 0, 4, 0, 0, 0];
const picChart3 = [2, 1, 1, 0, 2, 1, 1];
const picId = "pic";
const frameId = "frame";
const BOMId = "BOM";
const frontRoadId = "frontRoad";
const backRoadId = "backRoad";

onMounted(()=>{
    gantt.init("gantt_here");
    gantt.config.xml_date = "%Y-%m-%d";
    gantt.config.columns = gantColumns;
    gantt.parse({ data, links });
})



</script>
<template>
       <div id="gantt_here" class="h-30rem mb-4"></div>
       <div class="grid">
       <div class="col-12 xl:col-4">
      <div class="card">
        <h5>出图</h5>
        <ScheduleManagementChart
          :id="picId"
          :dataset1="picChart1"
          :dataset2="picChart2"
          :dataset3="picChart3"
        />
      </div>
    </div>
    <div class="col-12 xl:col-4">
      <div class="card">
        <h5>机架</h5>
        <ScheduleManagementChart
          :id="frameId"
          :dataset1="picChart1"
          :dataset2="picChart2"
          :dataset3="picChart3"
        />
      </div>
    </div>
    <div class="col-12 xl:col-4">
      <div class="card">
        <h5>BOM</h5>
        <ScheduleManagementChart
          :id="BOMId"
          :dataset1="picChart1"
          :dataset2="picChart2"
          :dataset3="picChart3"
        />
      </div>
    </div>
    <div class="col-12 xl:col-4">
      <div class="card">
        <h5>前道</h5>
        <ScheduleManagementChart
          :id="frontRoadId"
          :dataset1="picChart1"
          :dataset2="picChart2"
          :dataset3="picChart3"
        />
      </div>
    </div>
    <div class="col-12 xl:col-4">
      <div class="card">
        <h5>后道</h5>
        <ScheduleManagementChart
          :id="backRoadId"
          :dataset1="picChart1"
          :dataset2="picChart2"
          :dataset3="picChart3"
        />
      </div>
    </div>
    </div>
</template>