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
    request_delivery: "2023-06-10",
    text: "出图",
    start_date: "23-05-2023",
    end_date: "25-05-2023",
    open: true,
  },
  {
    id: 2,
    text: "机架",
    start_date: "25-05-2023",
    end_date: "27-05-2023",
    parent: 1,
  },
  {
    id: 3,
    text: "BOM",
    start_date: "26-05-2023",
    end_date: "27-05-2023",
    parent: 1,
  },
  {
    id: 4,
    text: "前道",
    start_date: "28-05-2023",
    end_date: "01-06-2023",
    parent: 1,
  },
  {
    id: 5,
    text: "后道",
    start_date: "29-05-2023",
    end_date: "03-06-2023",
    parent: 1,
  },
  {
    id: 6,
    OrderId: "ORDER02",
    machineId: "M01002",
    number: 1,
    request_delivery: "2023-06-10",
    text: "出图",
    start_date: "27-05-2023",
    end_date: "29-05-2023",
    open: true,
  },
  {
    id: 7,
    text: "机架",
    start_date: "29-05-2023",
    end_date: "30-05-2023",
    parent: 6,
  },
  {
    id: 8,
    text: "BOM",
    start_date: "01-06-2023",
    end_date: "05-06-2023",
    parent: 6,
  },
  {
    id: 9,
    text: "前道",
    start_date: "04-06-2023",
    end_date: "07-06-2023",
    parent: 6,
  },
  {
    id: 10,
    text: "后道",
    start_date: "08-06-2023",
    end_date: "12-06-2023",
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
    resize: true,
  },
  {
    name: "end_date",
    label: "计划完工时间",
    align: "center",
    width: "80",
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

// 定义一个定时器变量
var timer:any = null;

// 定义一个防抖函数
function debounce(func:Function, delay:number) {
  return function(this:any) {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}

// 绑定事件处理函数
gantt.attachEvent("onAfterTaskUpdate", debounce(function(id:number, task:IDatas){  
  // 根据id找到数据源中对应的元素
  let index = data.findIndex(item => item.id === id);
  
  if (index !== -1) {
    // 更新数据源中的属性
    data[index].start_date = task.start_date;
    console.log(data[index].start_date);
    console.log(task.start_date);
    
    data[index].start_date = task.start_date;
    data[index].end_date = task.end_date;
  }
}, 500)); 


watch(data,(newVal)=>{
    console.log('212',newVal)
  })



onMounted(() => {

  gantt.config.drag_move = true;
  gantt.config.fit_tasks = true;
  // gantt.config.grid_resize_columns = true; // 允许拖拉改变网格内部的列宽

  gantt.init("gantt_here");
  gantt.config.xml_date = "%Y-%m-%d";
  gantt.config.columns = gantColumns;
  gantt.parse({ data, links });

  // 设置甘特图的时间范围和缩放级别
  gantt.config.start_date = gantt.date.date_part(new Date());
  gantt.config.end_date = gantt.date.add(gantt.config.start_date, 1, "month");


});

console.log( JSON.stringify( gantt.config.start_date));

</script>
<template>
  <div id="gantt_here" class="w-full h-30rem mb-4"></div>
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
