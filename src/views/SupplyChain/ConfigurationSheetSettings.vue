<script setup lang="ts">
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

const selectedRingsInstall = ref();
const ringsInstall = ref([
  { name: "是", code: "yes" },
  { name: "否", code: "no" },
]);

const selectedRings = ref();
const rings = ref([
  { name: "无", code: "none" },
  { name: "30", code: "thirty" },
  { name: "36", code: "thirtySix" },
  { name: "42", code: "fortyTwo" },
  { name: "48", code: "fortyEight" },
]);

const selectedMachineBrand = ref();
const machineBrand = ref([
  { name: "多特", code: "deuter" },
  { name: "风琴", code: "harmonium" },
  { name: "格罗茨", code: "groz" },
]);
const selectedMachineType = ref();

const oilSupplySystem = ref([
  { type: "上轴", three: 1, four: 0, five: 2, six: 5 },
  { type: "下轴", three: 1, four: 0, five: 2, six: 5 },
]);

const oilSupplySystemColums = ref([
  { field: "type", header: "type" },
  { field: "four", header: "4通" },
  { field: "five", header: "5通" },
  { field: "six", header: "6通" },
]);

const selectedMainMotor = ref();
const mainMotor = ref([
  { name: "大豪4.7KW", code: "fourPointSeven" },
  { name: "大豪3.8KW", code: "threePointEight" },
  { name: "大豪3KW", code: "three" },
  { name: "大豪2KW", code: "two" },
  { name: "大豪1KW", code: "one" },
]);

const selectedlowerShaft = ref();
const lowerShaft = ref([
  { name: "铁", code: "iron" },
  { name: "铝", code: "aluminum" },
]);

const selectedSecondaryAxis = ref();
const secondaryAxis = ref([
  { name: "有", code: "yes" },
  { name: "无", code: "no" },
]);

const selectedTrimmingWay = ref();
const trimmingWay = ref([
  { name: "步进电机闭环丝杆动态剪线", code: "ClosedLoopScrew" },
  { name: "步进电机动态剪线", code: "Screw" },
]);

const selectedHookLine = ref();

const selectedSingleNeedleHooker = ref();
const singleNeedleHooker = ref([
  { name: "无", code: "none" },
  { name: "小头距", code: "smallHeadDistance" },
]);

const selectedMotor = ref();
const motor = ref([
  { name: "80电机2.0", code: "eightyTwo" },
  { name: "80电机1.5", code: "eightyOne" },
  { name: "50电机1.5", code: "fiftyOne" },
]);
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <div class="text-center text-900 text-xl">配置单设置</div>
        <div class="flex justify-content-between mb-6">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">技术协议</div>
            <InputText type="text" class="w-6" />
            <i class="pi pi-search flex align-items-end text-xl ml-2" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">配置单类型</div>
            <div class="flex flex-1 align-items-end justify-content-center">
              A
            </div>
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">订单号</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>

        <div class="text-xl border-top-1 border-300 pt-3">机型</div>
        <div class="flex justify-content-between">
          <div class="flex w-9 mr-3">
            <div class="flex align-items-end w-2 mr-2">机型信息</div>
            <div class="flex align-items-end">
              <span class="mr-3">PHP</span
              ><span class="mr-3">1226-450-800-1000</span
              ><span> TSM+TH+DHO+MT+MJ+DNL+A98</span>
            </div>
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end mr-2 w-5">机号</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>

        <div class="text-xl border-top-1 border-300 pt-3 mt-4">机架</div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">机架图号</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">机架长</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">背包数量</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>

        <div class="flex justify-content-between mt-3">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">吊环是否安装</div>
            <Dropdown
              v-model="selectedRingsInstall"
              :options="ringsInstall"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">吊环</div>
            <Dropdown
              v-model="selectedRings"
              :options="rings"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4"></div>
        </div>

        <div class="text-xl border-top-1 border-300 pt-3 mt-4">
          部装（机头）
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">定位</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">应用类型</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">头数</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">针数</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6"></div>
          <div class="flex w-4"></div>
        </div>

        <div class="text-xl border-top-1 border-300 pt-3 mt-4">
          部装（铁杆架）
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">类型</div>
            <div class="flex flex-1 align-items-end justify-content-center">
              PHP 12
            </div>
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">压脚簧</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">加粗压脚簧</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">平绣机针品牌</div>
            <Dropdown
              v-model="selectedMachineBrand"
              :options="machineBrand"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">平绣机针型号</div>
            <Dropdown
              v-model="selectedMachineType"
              :options="machineBrand"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">安装针数</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>

        <div class="text-xl border-top-1 border-300 pt-3 mt-4">
          部装（夹线器）
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">类型</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">过线轮</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4"></div>
        </div>
        <div class="text-xl border-top-1 border-300 pt-3 mt-4">
          部装（梭箱体及换色箱）
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">伞齿轮</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">换色箱数量</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">是否回型传动</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>

        <div class="text-xl border-top-1 border-300 pt-3 my-4">
          部装供油系统
        </div>
        <DataTable :value="oilSupplySystem" tableStyle="min-width: 50rem">
          <pre-Column
            v-for="col of oilSupplySystemColums"
            :key="col.field"
            :field="col.field"
            :header="col.header"
            style="width: 25%"
          >
            <!-- <template #body="{ data, field }">
              {{
                field === "price" ? formatCurrency(data[field]) : data[field]
              }}
            </template> -->
            <template #editor="{ data, field }">
              <!-- <template v-if="field !== 'price'">
                <InputText v-model="data[field]" autofocus />
              </template> -->
              <template>
                <InputNumber
                  v-model="data[field]"
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                  autofocus
                />
              </template>
            </template>
          </pre-Column>
          <!-- <pre-Column
            field="type"
            header=""
            class="text-600"
            style="font-weight: 600"
          >
          </pre-Column>
          <pre-Column field="three" header="3通" class="text-600">
            <template #editor="{ data, field }">
              <InputNumber
                v-model="data[field]"
                mode="currency"
                currency="USD"
                locale="en-US"
                autofocus
              />
            </template>
          </pre-Column>
          <pre-Column field="four" header="4通" class="text-600"></pre-Column>
          <pre-Column field="five" header="5通" class="text-600"></pre-Column>
          <pre-Column field="six" header="6通" class="text-600"></pre-Column> -->
        </DataTable>

        <div class="text-xl border-top-1 border-300 pt-3 mt-4">主传动</div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">主电机</div>
            <Dropdown
              v-model="selectedMainMotor"
              :options="mainMotor"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">电机数量</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">主电机带轮</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex flex-column justify-content-end w-5 mr-2">
              <div>上轴Ø20</div>
              <div>（主带轮轴）</div>
            </div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex flex-column justify-content-end w-5 mr-2 mt-4">
              <div>上轴Ø20</div>
              <div>（铝支撑座）</div>
            </div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex flex-column justify-content-end w-5 mr-2">
              <div>上轴Ø20</div>
              <div>（编码器轴）</div>
            </div>
            <InputText type="text" class="w-7" />
          </div>
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">下轴（梭芯）</div>
            <Dropdown
              v-model="selectedlowerShaft"
              :options="lowerShaft"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">下轴 （下轴支撑座）</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">辅轴 （副轴支撑座）</div>
            <Dropdown
              v-model="selectedSecondaryAxis"
              :options="secondaryAxis"
              optionLabel="name"
              class="w-7"
            />
          </div>
        </div>

        <div class="text-xl border-top-1 border-300 pt-3 mt-4">剪勾线</div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">剪线电机</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">剪线方式</div>
            <Dropdown
              v-model="selectedTrimmingWay"
              :options="trimmingWay"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">是否勾线</div>
            <Dropdown
              v-model="selectedHookLine"
              :options="ringsInstall"
              optionLabel="name"
              class="w-7"
            />
          </div>
        </div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">驱动数量</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">单针勾线器</div>
            <Dropdown
              v-model="selectedSingleNeedleHooker"
              :options="singleNeedleHooker"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4"></div>
        </div>
        <div class="text-xl border-top-1 border-300 pt-3 mt-4">驱动</div>
        <div class="flex justify-content-between">
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">剪线电机</div>
            <Dropdown
              v-model="selectedMotor"
              :options="motor"
              optionLabel="name"
              class="w-7"
            />
          </div>
          <div class="flex w-4 mr-6">
            <div class="flex align-items-end w-5 mr-2">剪线方式</div>
            <InputText type="text" class="w-7" />
          </div>
          <div class="flex w-4">
            <div class="flex align-items-end w-5 mr-2">是否勾线</div>
            <InputText type="text" class="w-7" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-inputtext,
.p-dropdown {
  border: 1px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #000;
}
</style>
