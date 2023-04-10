<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="primary"
        />

        <q-tabs v-model="tab" outside-arrows mobile-arrows class="text-primary">
          <q-tab name="mails" label="시스템관리" />
          <q-tab name="alarms" label="기본관리(MDM)" />
          <q-tab name="movies" label="주문관리" />
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
        <q-expansion-item expand-separator label="기본 마스터 관리">
          <!-- :header-inset-level="1" -->
          <!-- <q-expansion-item expand-separator label="Receipts" class="q-ml-lg"> -->
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
          <!-- </q-expansion-item> -->
        </q-expansion-item>
        <q-expansion-item expand-separator label="사용자 마스터 관리">
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { Quasar, Platform } from "quasar";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref("mails"),
    };
  },
});
</script>

<style>
.q-tab {
  font-weight: bolder;
}
</style>
