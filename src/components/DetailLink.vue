<template>
  <q-item-section clickable class="q-ml-lg q-py-md">
    <q-item-label>{{ detailList.title }}</q-item-label>
    <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
  </q-item-section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    detailList: {
      type: Array,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },
  },
});
</script>
