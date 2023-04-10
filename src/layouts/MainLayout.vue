<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white shadow-1">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="primary"
        />
        <!-- <q-btn class="text-primary" stretch flat label="시스템관리" />
        <q-btn class="text-primary" stretch flat label="기본관리(MDM)" />
        <q-btn class="text-primary" stretch flat label="주문관리" /> -->

        <q-tabs
          v-model="mainCurrentTab"
          outside-arrows
          mobile-arrows
          class="text-primary"
        >
          <q-tab name="system" label="시스템관리" />
          <q-tab name="mdm" label="기본관리(MDM)" />
          <q-tab name="order" label="주문관리" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered no-swipe-close>
      <q-list>
        <q-item-label header>
          <q-avatar size="md">
            <img src="../../public/icons/favicon-128x128.png" />
          </q-avatar>
          <span class="q-ml-md">WCS</span>
        </q-item-label>
        <EssentialLink
          v-for="list in menuList"
          :key="list.title"
          v-bind="list"
          :label="list.title"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { Quasar, Platform } from "quasar";

const menuList = [
  {
    title: "기본 마스터 관리",
    detailList: [
      {
        title: "어플리케이션",
        to: "/application",
      },
      {
        title: "시스템코드",
        to: "/syscode",
      },
      {
        title: "메시지",
        to: "#",
      },
      {
        title: "회사",
        to: "#",
      },
    ],
  },
  {
    title: "사용자 마스터 관리",
    detailList: [
      {
        title: "사용자",
        to: "#",
      },
    ],
  },
  {
    title: "메뉴 마스터 관리",
    detailList: [
      {
        title: "개발화면",
        to: "#",
      },
      {
        title: "메뉴",
        to: "#",
      },
      {
        title: "버튼",
        to: "#",
      },
    ],
  },
  {
    title: "권한 마스터 관리",
    detailList: [
      {
        title: "사용자 권한 관리",
        to: "#",
      },
    ],
  },
  {
    title: "I/F내역",
    detailList: [
      {
        title: "화주 수진내역",
        to: "#",
      },
    ],
  },
];
const leftDrawerOpen = ref(false);
const mainCurrentTab = ref("system");
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<!-- <script>
export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      menuList: menuList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref("system"),
    };
  },
});
</script> -->

<style>
.q-tab {
  font-weight: bolder;
}
</style>
