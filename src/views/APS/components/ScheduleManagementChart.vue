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
  num: Array<number>;
  below: Array<number>;
  over: Array<number>;
  id: string;
  data: string[];
  flag: boolean;
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
    data: props.data,
  },
  yAxis: {},
  series: [
    {
      data: props.num,
      type: "bar",
      stack: "x",
    },
    {
      data: props.below,
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
      data: props.over,
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

let myChart: any = null;
let timer: any = null;

onMounted(() => {
  let chartDom = document.getElementById(props.id)!;
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  myChart = echarts.init(chartDom);
  option && myChart.setOption(option);
});

timer = setInterval(() => {
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  option && myChart.setOption(option);
}, 600);

/* watch(props.num, (newVal) => {
  console.log(newVal);
  refresh();
});
 */
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div :id="props.id" style="width: 95%; height: 20vw"></div>
</template>
<style></style>
