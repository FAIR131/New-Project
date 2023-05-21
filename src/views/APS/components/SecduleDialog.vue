<script setup lang="ts">
import type { IColums, IDatas, ILinks } from "@/types/APS/ScheduleManagement";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import ScheduleManagementChart from "../components/ScheduleManagementChart.vue";
const props = defineProps<{
  flag: boolean;
}>();

const data: IDatas[] = [
  {
    id: 1,
    OrderId: "ORDER01",
    machineId: "M01001",
    number: 1,
    request_delivery: "2023-06-10",
    text: "出图",
    start_date: "19-05-2023",
    end_date: "25-05-2023",
    open: true,
  },
  {
    id: 2,
    text: "机架",
    start_date: "20-05-2023",
    end_date: "27-05-2023",
    parent: 1,
  },
  {
    id: 3,
    text: "BOM",
    start_date: "21-05-2023",
    end_date: "25-05-2023",
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

const picNum: Ref<number[]> = ref([5, 0, 5]);
const picBelow: Ref<number[]> = ref([0, 4, 0]);
const picOver: Ref<number[]> = ref([2, 0, 1]);
const picId = "pic";
const frameId = "frame";
const BOMId = "BOM";
const frontRoadId = "frontRoad";
const backRoadId = "backRoad";

// 定义一个定时器变量
var timer: any = null;

// 定义一个防抖函数
function debounce(func: Function, delay: number) {
  return function (this: any) {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

// 拖拉任务
gantt.attachEvent(
  "onAfterTaskUpdate",
  debounce(function (id: number, task: IDatas) {
    // 根据id找到数据源中对应的元素
    let index = data.findIndex((item) => item.id === id);

    if (index !== -1) {
      // 更新数据源中的属性
      data[index].start_date = task.start_date;

      data[index].start_date = task.start_date;
      data[index].end_date = task.end_date;
    }
  }, 500)
);

watch(data, (newVal) => {
  console.log("212", newVal);
});

onMounted(() => {
  gantt.config.drag_move = true;
  gantt.config.fit_tasks = true;

  gantt.init("gantt_here");
  gantt.config.xml_date = "%Y-%m-%d";
  gantt.config.columns = gantColumns;
  gantt.parse({ data, links });

  // 设置甘特图的时间范围和缩放级别
  gantt.config.start_date = gantt.date.date_part(new Date());
  gantt.config.end_date = gantt.date.add(gantt.config.start_date, 1, "month");
});

const xAxisArr: string[] = [];

let day = new Date();

const handleXAxis = () => {
  for (let i = 0; i < 3; i++) {
    const month = day.getMonth() + 1;
    const date = day.getDate() + i;
    const xAxis = month + "/" + date;
    xAxisArr.push(xAxis);
  }
};
handleXAxis();
// console.log(day);

let isMouseDown = false;
document.addEventListener("mousedown", function () {
  isMouseDown = true;
});

gantt.attachEvent(
  "onGanttScroll",
  debounce(function () {
    if (isMouseDown) {
      for (let i: number = 0; i < picNum.value.length; i++) {
        picBelow.value[i] = Math.floor(Math.random() * 9) + 1;
        if (picBelow.value[i] < 6) {
          picNum.value[i] = picOver.value[i] = 0;
        } else {
          picBelow.value[i] = 0;
          picNum.value[i] = Math.floor(Math.random() * 9) + 5;
          picOver.value[i] = Math.floor(Math.random() * 3) + 1;
        }
      }
    }
  }, 500)
);

/*
let countArr: number[] = [];
const handleCount = (str: string) => {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    count = 0;
    // day = new Date();
    const dd = day.setDate(day.getDate() + i);
    console.log("第" + i, dd);

    data.forEach((item) => {
      // 获得任务的时间起始
      const startDateString = item.start_date.split("-").reverse().join("-");
      const endDateString = item.end_date.split("-").reverse().join("-");
      const startDateObj = new Date(startDateString).getTime();
      const endDateObj = new Date(endDateString).getTime();
      console.log(startDateObj);
      console.log(endDateObj);

      // console.log(day.setDate(day));

      if (str === item.text) {
        if (startDateObj < dd && dd < endDateObj) {
          console.log(startDateObj < dd && dd < endDateObj);

          count++;
        }
      }
      console.log("count", count);
    });
    countArr.push(count);
    console.log("countArr", countArr);
  }
};
handleCount("出图");
console.log("result", countArr);
 */
</script>
<template>
  <div id="gantt_here" class="w-full h-30rem mb-4"></div>
  <div class="grid">
    <div class="mr-3" style="width: 18.5%">
      <div class="card m-auto">
        <h5>出图</h5>
        <ScheduleManagementChart
          :id="picId"
          :num="picNum"
          :below="picBelow"
          :over="picOver"
          :data="xAxisArr"
        />
      </div>
    </div>
    <div class="mr-3" style="width: 18.5%">
      <div class="card w-full">
        <h5>机架</h5>
        <ScheduleManagementChart
          :id="frameId"
          :num="picNum"
          :below="picBelow"
          :over="picOver"
          :data="xAxisArr"
          :falg="props.flag"
        />
      </div>
    </div>
    <div class="mr-3" style="width: 18.5%">
      <div class="card">
        <h5>BOM</h5>
        <ScheduleManagementChart
          :id="BOMId"
          :num="picNum"
          :below="picBelow"
          :over="picOver"
          :data="xAxisArr"
        />
      </div>
    </div>
    <div class="mr-3" style="width: 18.5%">
      <div class="card">
        <h5>前道</h5>
        <ScheduleManagementChart
          :id="frontRoadId"
          :num="picNum"
          :below="picBelow"
          :over="picOver"
          :data="xAxisArr"
        />
      </div>
    </div>
    <div style="width: 18.5%">
      <div class="card">
        <h5>后道</h5>
        <ScheduleManagementChart
          :id="backRoadId"
          :num="picNum"
          :below="picBelow"
          :over="picOver"
          :data="xAxisArr"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  padding: 1rem;
  margin: auto;
}
</style>
