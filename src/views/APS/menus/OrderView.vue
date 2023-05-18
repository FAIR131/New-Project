<script setup lang="ts">
import type { ITabalData } from "@/types/APS/ScheduleManagement";
import ProgressBar from "primevue/progressbar";
onMounted(() => {
  tabalData.value = [
    {
      orderId: "ABC",
      nachineId: "M001",
      model: "MIX-PCD",
      number: 1,
      deadLine: "06-01",
      Quantity: 50,
      framesNum: 6,
      mapping: 1,
      mapping_start: "05-01",
      mapping_end: "05-04",
      BOM: 2,
      BOM_start: "05-10",
      BOM_end: "05-11",
      blank: 0,
      blank_start: "05-15",
      blank_end: "05-20",
      frame: 0,
      frame_start: "06-01",
      frame_end: "06-04",
      paint: 0,
      paint_start: "06-10",
      paint_end: "06-11",
      assembly: 40,
      assembly_start: "07-01",
      assembly_end: "07-10",
    },
    {
      orderId: "AAA",
      nachineId: "M002",
      model: "MIX-PAA",
      number: 2,
      deadLine: "07-01",
      Quantity: 150,
      framesNum: 6,
      mapping: 1,
      mapping_start: "05-01",
      mapping_end: "05-04",
      BOM: 1,
      BOM_start: "05-10",
      BOM_end: "05-11",
      blank: 2,
      blank_start: "05-15",
      blank_end: "05-20",
      frame: 0,
      frame_start: "06-01",
      frame_end: "06-04",
      paint: 0,
      paint_start: "06-10",
      paint_end: "06-11",
      assembly: 60,
      assembly_start: "07-01",
      assembly_end: "07-10",
    },
  ];
});

const tabalData: Ref<ITabalData[]> = ref([]);
</script>

<template>
  <div class="grid p-fluid mt-3">
    <div class="col-12">
      <div class="card">
        <h5>状态</h5>
        <DataTable
          :value="tabalData"
          tableStyle="min-width: 50rem"
          paginator
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20, 50]"
        >
          <pre-Column
            header="订单号"
            field="orderId"
            style="min-width: 5rem"
            class="text-600"
          ></pre-Column>
          <pre-Column
            header="机器号"
            field="nachineId"
            style="min-width: 5rem"
            class="text-600"
          ></pre-Column>
          <pre-Column
            header="型号"
            field="model"
            style="min-width: 5rem"
            class="text-600"
          ></pre-Column>
          <pre-Column
            header="数量"
            field="number"
            style="min-width: 5rem"
            class="text-600"
          ></pre-Column>
          <pre-Column
            header="要求交期"
            field="deadLine"
            style="min-width: 5rem"
            class="text-600"
          ></pre-Column>
          <pre-Column
            header="头数"
            field="Quantity"
            style="min-width: 5rem"
            class="text-600"
          ></pre-Column>
          <pre-Column
            header="帧数"
            field="framesNum"
            style="min-width: 5rem"
            class="text-600"
          ></pre-Column>
          <pre-Column
            header="制图"
            field="mapping"
            style="min-width: 5rem"
            class="text-600"
          >
            <template #body="{ data }">
              <i
                v-if="data.mapping === 1"
                class="pi pi-check-circle text-2xl text-green-600"
              ></i>
              <i
                v-else-if="data.mapping === 2"
                class="pi pi-fast-forward text-2xl text-blue-400"
              ></i>
              <i v-else class="pi pi-clock text-2xl text-bluegray-300"></i>
            </template>
          </pre-Column>
          <pre-Column
            header="BOM"
            field="BOM"
            style="min-width: 5rem"
            class="text-600"
          >
            <template #body="{ data }">
              <i
                v-if="data.BOM === 1"
                class="pi pi-check-circle text-2xl text-green-600"
              ></i>
              <i
                v-else-if="data.BOM === 2"
                class="pi pi-fast-forward text-2xl text-blue-400"
              ></i>
              <i v-else class="pi pi-clock text-2xl text-bluegray-300"></i>
            </template>
          </pre-Column>
          <pre-Column
            header="毛坯"
            field="blank"
            style="min-width: 5rem"
            class="text-600"
          >
            <template #body="{ data }">
              <i
                v-if="data.blank === 1"
                class="pi pi-check-circle text-2xl text-green-600"
              ></i>
              <i
                v-else-if="data.blank === 2"
                class="pi pi-fast-forward text-2xl text-blue-400"
              ></i>
              <i v-else class="pi pi-clock text-2xl text-bluegray-300"></i>
            </template>
          </pre-Column>
          <pre-Column
            header="机架"
            field="frame"
            style="min-width: 5rem"
            class="text-600"
          >
            <template #body="{ data }">
              <i
                v-if="data.frame === 1"
                class="pi pi-check-circle text-2xl text-green-600"
              ></i>
              <i
                v-else-if="data.frame === 2"
                class="pi pi-fast-forward text-2xl text-blue-400"
              ></i>
              <i v-else class="pi pi-clock text-2xl text-bluegray-300"></i>
            </template>
          </pre-Column>
          <pre-Column
            header="油漆"
            field="paint"
            style="min-width: 5rem"
            class="text-600"
          >
            <template #body="{ data }">
              <i
                v-if="data.paint === 1"
                class="pi pi-check-circle text-2xl text-green-600"
              ></i>
              <i
                v-else-if="data.paint === 2"
                class="pi pi-fast-forward text-2xl text-blue-400"
              ></i>
              <i v-else class="pi pi-clock text-2xl text-bluegray-300"></i>
            </template>
          </pre-Column>
          <pre-Column
            header="装配"
            field="assembly"
            style="min-width: 5rem"
            class="text-600"
          >
            <template #body="{ data }">
              <ProgressBar
                :value="data.assembly"
                :showValue="false"
                style="height: 0.5rem"
              ></ProgressBar>
            </template>
          </pre-Column>
        </DataTable>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <h5>日期</h5>
        <DataTable
          :value="tabalData"
          tableStyle="min-width: 50rem"
          paginator
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20, 50]"
        >
          <ColumnGroup type="header">
            <pre-Row>
              <pre-Column header="订单号" :rowspan="2" class="text-600" />
              <pre-Column header="机器号" :rowspan="2" class="text-600" />
              <pre-Column header="型号" :rowspan="2" class="text-600" />
              <pre-Column header="数量" :rowspan="2" class="text-600" />
              <pre-Column header="要求交期" :rowspan="2" class="text-600" />
              <pre-Column header="头数" :rowspan="2" class="text-600" />
              <pre-Column header="帧数" :rowspan="2" class="text-600" />
              <pre-Column :colspan="2" class="text-600">
                <template #header>
                  <div class="text-center w-full">制图</div>
                </template></pre-Column
              >
              <pre-Column header="BOM" :colspan="2" class="text-600" />
              <pre-Column header="毛坯" :colspan="2" class="text-600" />
              <pre-Column header="机架" :colspan="2" class="text-600" />
              <pre-Column header="油漆" :colspan="2" class="text-600" />
              <pre-Column header="装配" :colspan="2" class="text-600" />
            </pre-Row>
            <pre-Row>
              <pre-Column header="起" class="text-600" />
              <pre-Column header="止" class="text-600" />
              <pre-Column header="起" class="text-600" />
              <pre-Column header="止" class="text-600" />
              <pre-Column header="起" class="text-600" />
              <pre-Column header="止" class="text-600" />
              <pre-Column header="起" class="text-600" />
              <pre-Column header="止" class="text-600" />
              <pre-Column header="起" class="text-600" />
              <pre-Column header="止" class="text-600" />
              <pre-Column header="起" class="text-600" />
              <pre-Column header="止" class="text-600" />
            </pre-Row>
          </ColumnGroup>

          <pre-Column
            header="订单号"
            field="orderId"
            style="min-width: 5rem"
          ></pre-Column>
          <pre-Column
            header="机器号"
            field="nachineId"
            style="min-width: 5rem"
          ></pre-Column>
          <pre-Column
            header="型号"
            field="model"
            style="min-width: 5rem"
          ></pre-Column>
          <pre-Column
            header="数量"
            field="number"
            style="min-width: 5rem"
          ></pre-Column>
          <pre-Column
            header="要求交期"
            field="deadLine"
            style="min-width: 6rem"
          ></pre-Column>
          <pre-Column
            header="头数"
            field="Quantity"
            style="min-width: 5rem"
          ></pre-Column>
          <pre-Column
            header="帧数"
            field="framesNum"
            style="min-width: 5rem"
          ></pre-Column>
          <pre-Column
            header="制图起"
            field="mapping_start"
            style="min-width: 5rem"
          >
          </pre-Column>
          <pre-Column
            header="制图止"
            field="mapping_end"
            style="min-width: 5rem"
          >
          </pre-Column>
          <pre-Column header="BOM起" field="BOM_start" style="min-width: 5rem">
          </pre-Column>
          <pre-Column header="BOM止" field="BOM_end" style="min-width: 5rem">
          </pre-Column>
          <pre-Column
            header="毛坯起"
            field="blank_start"
            style="min-width: 5rem"
          >
          </pre-Column>
          <pre-Column header="毛坯止" field="blank_end" style="min-width: 5rem">
          </pre-Column>
          <pre-Column
            header="机架起"
            field="frame_start"
            style="min-width: 5rem"
          >
          </pre-Column>
          <pre-Column header="机架止" field="frame_end" style="min-width: 5rem">
          </pre-Column>
          <pre-Column
            header="油漆起"
            field="paint_start"
            style="min-width: 5rem"
          >
          </pre-Column>
          <pre-Column header="油漆止" field="paint_end" style="min-width: 5rem">
          </pre-Column>
          <pre-Column
            header="装配起"
            field="assembly_start"
            style="min-width: 5rem"
          >
          </pre-Column>
          <pre-Column
            header="装配止"
            field="assembly_end"
            style="min-width: 5rem"
          >
          </pre-Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-datatable {
  :deep(.p-column-header-content) {
    justify-content: center;
  }

  :deep(.p-datatable-tbody > tr > td) {
    text-align: center;
  }
}
</style>
