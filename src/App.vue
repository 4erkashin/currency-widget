<template>
  <h1>Currency widget</h1>

  <InitialCart :initial-cart="initialCart" />
  <TotalInBaseCurrency :total="total" />

  <Suspense>
    <template #default>
      <Main :total="total" />
    </template>
    <template #fallback>
      <MainSkeleton />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { countTotalPrice } from '@/components/utils/helpers';
import initialCart from '@/utils/initialCart.json';

import InitialCart from '@/components/InitialCart.vue';
import Main from '@/components/main/Main.vue';
import MainSkeleton from '@/components/main/Skeleton.vue';
import TotalInBaseCurrency from '@/components/TotalInBaseCurrency.vue';

export default defineComponent({
  name: 'App',
  components: {
    InitialCart,
    Main,
    MainSkeleton,
    TotalInBaseCurrency,
  },
  setup() {
    const total = ref(countTotalPrice(initialCart));
    return { initialCart, total };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 400px;
  margin: 0 auto;
}

h1,
h2,
h3 {
  margin: 0.6em 0 0.4em;
}

.records {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto;
  padding: 0;
}

.records__record {
  display: flex;
  justify-content: space-between;
}

.records__record + .records__record {
  margin-top: 0.5em;
}

.records__record > *:first-child {
  overflow: hidden;
  white-space: nowrap;
}

.records__record > *:first-child::after {
  content: ' . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ';
}

.records__record > *:last-child {
  margin-left: 2px;
}
</style>
