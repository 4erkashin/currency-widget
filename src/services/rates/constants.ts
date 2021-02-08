import { simplePipe } from '@/utils/helpers';

const BASE_CURRENCY = 'USD';
const DESIRED_RATES = ['RUB', 'EUR', 'USD', 'GBP', 'JPY'];

const REQUEST_URL = 'https://api.exchangeratesapi.io/latest';
const PARAMS: { base: string; symbols: string } = {
  base: BASE_CURRENCY,
  symbols: DESIRED_RATES.join(','),
};
export const RATES_REQUEST_URL = simplePipe<string>(REQUEST_URL)
  .map<URL>(string => new URL(string))
  .map<URL>(url => {
    const urlCopy = new URL(String(url));
    urlCopy.search = String(new URLSearchParams(PARAMS));
    return urlCopy;
  }).value;

export const NAMINGS_MAP = {
  RUB: 'rubles',
  EUR: 'euros',
  USD: 'dollars',
  GBP: 'pounds',
  JPY: 'yens',
};
