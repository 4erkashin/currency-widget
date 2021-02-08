import { Rate, RatesMapping, RawRates } from '@/services/rates/types';
import { NAMINGS_MAP, RATES_REQUEST_URL } from '@/services/rates/constants';
import { ref } from 'vue';
import { simplePipe } from '@/utils/helpers';

function sanitizeRates(rates: Record<string, number>, mapping: RatesMapping) {
  return simplePipe<RatesMapping>(mapping)
    .map<[string, string][]>(mapping => Object.entries(mapping))
    .map<Rate[]>(entries => {
      return entries.map(([from, to]) => ({ key: to, value: rates[from] }));
    }).value;
}

export async function getRates() {
  const rates = ref([] as Rate[]);
  const error = ref(null);
  try {
    const response = await fetch(String(RATES_REQUEST_URL));
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    const data = (await response.json()) as { rates: RawRates };
    rates.value = sanitizeRates(data.rates, NAMINGS_MAP);
  } catch (e) {
    error.value = e;
  }

  return { rates, error };
}
