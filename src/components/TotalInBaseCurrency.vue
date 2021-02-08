<template>
  <h2>Total in base currency</h2>
  <span>{{ total }}{{ sign }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    total: {
      type: Number,
      required: true,
    },
    sign: {
      type: String,
      default: '$',
    },
  },
});
</script>
