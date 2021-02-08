<template>
  <h2>Total relative to rates</h2>
  <ul class="records">
    <li
      v-for="record in humanReadableRecords"
      :key="record.start"
      class="records__record"
    >
      <span>{{ record.start }}</span>
      <span>{{ record.end }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { RawRates } from '@/services/rates/types';
import { SIGNS_MAP } from '@/components/utils/constants';

export default defineComponent({
  name: 'TotalRelativeToRates',
  props: {
    records: {
      required: true,
      type: Object as PropType<RawRates>,
    },
  },

  async setup(props) {
    const humanReadableRecords = computed(() => {
      return Object.entries(props.records).reduce((acc, record) => {
        const [key, value] = record;
        acc.push({
          start: `Total in ${key}`,
          end: `${value}${SIGNS_MAP[key]}`,
        });

        return acc;
      }, [] as { start: string; end: string }[]);
    });

    return { humanReadableRecords };
  },
});
</script>
