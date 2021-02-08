<template>
  <div class="skeleton skeleton__rates">
    <div class="header"></div>
    <div class="content"></div>
  </div>

  <div class="skeleton skeleton__total-relative-to-rates">
    <div class="header"></div>
    <div class="content"></div>
  </div>

  <div class="skeleton skeleton__raw-object">
    <div class="header"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Skeleton',
});
</script>

<style scoped>
.skeleton {
  max-width: 60%;
  margin: 1em auto 0.5em;
}

.skeleton > .header {
  min-height: 2em;
}

.skeleton > .content {
  min-height: 8em;
}

.skeleton > * {
  animation: pulse-bg 0.5s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>
