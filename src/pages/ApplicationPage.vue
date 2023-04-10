<template>
  <section>
    <q-tabs
      v-model="currentTab"
      dense
      inline-label
      align="left"
      class="bg-blue-grey-2 text-grey"
      active-bg-color="white"
      active-color="primary"
      indicator-color="transparent"
      :breakpoint="0"
    >
      <q-tab
        v-for="tab in Tabs"
        :key="tab.name"
        :name="tab.tabname"
        :ripple="false"
        :label="tab.label"
        @click="changeTab(tab)"
      >
        <q-btn round dense flat class="z-max q-ml-sm" icon="close" size="xs" />
      </q-tab>
    </q-tabs>
  </section>
  <section class="q-pa-md q-gutter-sm">
    <div class="col-12 col-sm-grow column justify-between">
      <div class="row items-center">
        <span class="text-caption text-grey" :data="Tabs"
          >기본 마스터 관리 / {{ Tabs[0].label }}
        </span>
        <q-space />
        <div class="q-gutter-x-sm">
          <q-btn square size="md" color="primary" label="초기화" />
          <q-btn square color="primary" label="검색" />
        </div>
      </div>
    </div>
    <div>
      <q-card flat bordered class="q-pa-sm row items-start">
        <q-card-section> 어플리케이션 코드 </q-card-section>
        <q-input v-model="search" dense type="search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const search = ref();
const currentTab = ref("application");
const changeTab = (tab) => {
  this.currentTab.value = tab;
  console.log(currentTab.value);
};

// const Tabs = ref([]);
const Tabs = [
  {
    id: 1,
    name: "application",
    label: "어플리케이션",
  },
  {
    id: 2,
    name: "syscode",
    label: "시스템코드",
  },

  {
    id: 3,
    name: "msg",
    label: "메세지",
  },
];
</script>

<style lang="scss" scoped></style>
