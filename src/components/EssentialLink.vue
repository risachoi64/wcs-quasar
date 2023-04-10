<template>
  <!-- drawer 메뉴 -->
  <q-expansion-item tag="a" target="_blank" default-opened>
    <q-item
      v-for="list in detailList"
      :key="list"
      :to="list.to"
      clickable
      @click="createDetailTab(list)"
    >
      <q-item-section class="q-ml-lg">
        {{ list.title }}
      </q-item-section>
      <!-- {{ item.title }} -->
    </q-item>
  </q-expansion-item>
</template>

<script setup>
import { ref } from "vue";

const detailTab = ref([]);
const createDetailTab = (title) => {
  detailTab.value.push(title);
  console.log(detailTab.value);
};
defineProps({
  title: {
    type: String,
    required: true,
  },

  detailList: {
    type: Array,
    required: true,
  },
});
</script>
<!-- <script>
export default defineComponent({
  name: "EssentialLink",
  props: 
  {
    title: {
      type: String,
      required: true,
    },

    detailList: {
      type: Array,
      required: true,
    },

    to: {
      type: String,
      default: "#",
    },
  },
  
});
</script> -->
<style></style>
