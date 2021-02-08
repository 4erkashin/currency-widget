<template>
  <h2>Rates</h2>
  <ul class="records">
    <li
      v-for="record in humanReadableRecords"
      :key="record"
      class="records__record"
    >
      <span>1{{ sign }}</span>
      <span>{{ record }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { Rate } from '@/services/rates/types';
import { SIGNS_MAP } from '@/components/utils/constants';

export default defineComponent({
  name: 'Rates',
  props: {
    rates: {
      required: true,
      type: Array as PropType<Rate[]>,
    },
    sign: {
      type: String,
      default: '$',
    },
  },

  async setup(props) {
    const humanReadableRecords = computed(() => {
      return props.rates.reduce((acc, { key, value }) => {
        if (value === 1) {
          return acc;
        }

        const fixedLengthValue = Number(value.toFixed(2));
        acc.push(`${fixedLengthValue}${SIGNS_MAP[key]}`);

        return acc;
      }, [] as string[]);
    });

    return { humanReadableRecords };
  },
});
</script>
