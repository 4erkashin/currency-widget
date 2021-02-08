<template>
  <h2>Initial cart</h2>
  <ul class="records">
    <li
      v-for="(record, index) in initialCart"
      :key="record"
      class="records__record"
    >
      <span>Some stuff #{{ index + 1 }}</span>
      <span>{{ record.price }}{{ sign }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    initialCart: {
      type: Object,
      required: true,
    },
    sign: {
      type: String,
      default: '$',
    },
  },
});
</script>
