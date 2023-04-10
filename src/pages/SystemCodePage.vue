<template>
  <section>
    <q-tabs
      v-model="subTab"
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
        v-for="{ name, title } in Tabs"
        :key="name"
        :name="name"
        :ripple="false"
      >
        {{ title }}
        <q-btn round dense flat class="z-max q-ml-sm" icon="close" size="xs" />
      </q-tab>
    </q-tabs>
  </section>
  <section class="q-pa-md q-gutter-sm">
    <div class="col-12 col-sm-grow column justify-between">
      <div class="row items-center">
        <span class="text-caption text-grey"
          >기본 마스터 관리 / 시스템코드
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
        <q-card-section> 시스템헤더 코드 </q-card-section>
        <!-- v-model="search" -->
        <q-input dense type="search">
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

const subTab = ref("syscode");
const Tabs = [
  {
    name: "application",
    title: "어플리케이션",
  },
  {
    name: "syscode",
    title: "시스템코드",
  },

  {
    name: "msg",
    title: "메세지",
  },
];
</script>

<style lang="scss" scoped></style>
