<script setup lang="ts">
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart, PieChart  } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from "echarts/renderers";


echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  PieChart,
  LabelLayout
]);

import type { EChartsOption } from "echarts/types/dist/shared";

let lineOption: EChartsOption = {
  title: {
    text: "年度异常趋势",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["数据一", "数据二"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "数据一",
      type: "line",
      stack: "Total",
      data: [10, 12, 15, 19, 20, 22, 24, 26, 29, 34, 36, 40],
    },
    {
      name: "数据二",
      type: "line",
      stack: "Total",
      data: [8, 10, 17, 19, 22, 26, 20, 22, 27, 36, 39, 43],
    },
  ],
};

let pieOption:EChartsOption = {
  title: {
    text: '本年完工机型占比',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'right'
  },
  series: [
    {
      // name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 10, name: '项目一' },
        { value: 73, name: '项目二' },
        { value: 58, name: '项目三' },
        { value: 48, name: '项目四' },
        { value: 30, name: '项目五' }
      ],
      label:{
      formatter:'{c}'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

let lineChart: echarts.ECharts | null = null;
let pieChart: echarts.ECharts | null = null;

onMounted(async () => {
  lineChart = await echarts.init(document.getElementById("lineChart")!);
  lineOption && lineChart.setOption(lineOption);
  pieChart = await echarts.init(document.getElementById("pieChart")!);
  pieOption && pieChart.setOption(pieOption);
});

onBeforeUnmount(() => {
  lineChart?.dispose();
  pieChart?.dispose();
});
</script>
<template>
  <div class="grid">
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-2">
          <div>
            <span class="block text-600 font-medium mb-2 text-xl"
              >今日完工/计划</span
            >
            <div class="text-900 font-medium text-xl">
              <span class="text-green-700 text-3xl">2</span
              ><span class="text-3xl"> / </span
              ><span class="text-blue-600 text-3xl">8</span> 台
            </div>
          </div>
          <div
            class="flex align-items-center justify-content-center bg-blue-100 border-round"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-check-circle text-blue-500 text-xl"></i>
          </div>
        </div>
        <div class="mb-3">
          <span class="text-700 font-medium text-xl">
            <span>330</span>/<span>660</span>头
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-2">
          <div>
            <span class="block text-600 font-medium mb-2 text-xl"
              >本月完工/计划</span
            >
            <div class="text-900 font-medium text-xl">
              <span class="text-green-700 text-3xl">12</span
              ><span class="text-3xl"> / </span
              ><span class="text-blue-600 text-3xl">20</span> 台
            </div>
          </div>
          <div
            class="flex align-items-center justify-content-center bg-green-100 border-round"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-check-square text-green-500 text-xl"></i>
          </div>
        </div>
        <div class="mb-3">
          <span class="text-700 font-medium text-xl">
            <span>666</span>/<span>999</span>头
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-1">
          <div>
            <span class="block text-600 font-medium text-xl">本月准交率</span>
            <div class="text-900 font-medium text-xl">
              <div class="text-green-700 text-3xl">82%</div>
              <div>同比: <span class="text-red-700 text-2xl">+4%</span></div>
            </div>
          </div>
          <div
            class="flex align-items-center justify-content-center bg-cyan-100 border-round"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-cloud-upload text-cyan-500 text-xl"></i>
          </div>
        </div>
        <span class="text-700 font-medium text-xl"
          >本年准交率 <span>75%</span></span
        >
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-1">
          <div>
            <span class="block text-600 font-medium text-xl">今日异常</span>
            <div class="text-900 font-medium text-xl">
              <div class="text-900 font-medium text-xl">
                <span class="text-green-700 text-3xl">2</span
                ><span class="text-3xl"> / </span
                ><span class="text-red-600 text-3xl">8</span> 个
              </div>
              <div>同比: <span class="text-red-700 text-2xl">+4%</span></div>
            </div>
          </div>
          <div
            class="flex align-items-center justify-content-center bg-orange-100 border-round"
            style="width: 2.5rem; height: 2.5rem"
          >
            <i class="pi pi-bell text-orange-500 text-xl"></i>
          </div>
        </div>
        <span class="text-700 font-medium text-xl"
          >本月累计异常 <span>19</span>个</span
        >
      </div>
    </div>

    <div class="col-12 xl:col-6">
      <div class="card">
        <div id="lineChart" style="width: 100%; height: 400px"></div>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card">
        <div id="pieChart" style="width: 100%; height: 400px"></div>
      </div>
    </div>
  </div>
</template>
