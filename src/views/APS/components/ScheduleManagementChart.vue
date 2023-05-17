<script setup lang="ts">
import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
} from "echarts/charts";
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from "echarts/components";
import type { ComposeOption } from "echarts/core";

const props = defineProps<{
  dataset1: Array<number>;
  dataset2: Array<number>;
  dataset3: Array<number>;
  id: string;
}>();


// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

const option: ECOption = {
  xAxis: {
    data: [
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
      "星期日",
    ],
  },
  yAxis: {},
  series: [
    {
      data: props.dataset1,
      type: "bar",
      stack: "x",
    },
    {
      data: props.dataset2,
      type: "bar",
      stack: "x",
      color: "green",
      label: {
        show: true,
        position: "top",
        color: "green",
        formatter: function (params) {
          let labels = "";
          if (params.value !== 0) {
            labels = "75%";
          }
          return labels;
        },
      },
    },
    {
      data: props.dataset3,
      type: "bar",
      stack: "x",
      color: "red",
      label: {
        show: true,
        position: "top",
        formatter: function (params) {
          let labels = "";
          if (params.value !== 0) {
            labels = "25%";
          }
          return labels;
        },
        color: "red",
      },
    },
  ],
};

// 新建一个promise对象
let newPromise = new Promise<void>((resolve) => {
  resolve();
});
//然后异步执行echarts的初始化函数
newPromise.then(() => {
  //	此dom为echarts图标展示dom
  let chartDom = document.getElementById(props.id)!;
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  let myChart = echarts.init(chartDom);
  option && myChart.setOption(option);
});
</script>

<template>
  <div :id="props.id" style="width: 100%; height: 400px"></div>
</template>
