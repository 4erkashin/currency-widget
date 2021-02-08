<template>
  <template v-if="error">
    <h2>Errors</h2>
    <span>{{ error }}</span>
  </template>

  <template v-else>
    <Rates :rates="rates" />

    <TotalRelativeToRates :records="totalRelativeToRates" />

    <details class="raw-object">
      <summary>Raw Object</summary>
      <code>
        {{ JSON.stringify(totalRelativeToRates, null, 2) }}
      </code>
    </details>
  </template>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { RawRates } from '@/services/rates/types';

import { countTotalPrices } from '@/components/utils/helpers';
import { getRates } from '@/services/rates/getRates';

import Rates from '@/components/human-readable/Rates.vue';
import TotalRelativeToRates from '@/components/human-readable/TotalRelativeToRates.vue';

export default defineComponent({
  name: 'Main',
  components: {
    Rates,
    TotalRelativeToRates,
  },
  props: {
    total: {
      required: true,
      type: Number,
    },
  },

  async setup(props) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const { rates, error } = await getRates();

    const totalRelativeToRates = ref({} as RawRates);
    totalRelativeToRates.value = countTotalPrices(rates.value, props.total);

    return {
      error,
      rates,
      totalRelativeToRates,
    };
  },
});
</script>

<style scoped>
.raw-object {
  max-width: 60%;
  margin: 1em auto 0;
  text-align: initial;
  white-space: pre;
}

.raw-object > summary {
  cursor: pointer;
}

.raw-object > summary:focus {
  outline: none;
}

.raw-object > code {
  display: block;
  background: #f7f6f3;
  padding: 1em;
}
</style>
