import { Rate, RawRates } from '@/services/rates/types';
import { InitialCart } from '@/utils/types';
import { simplePipe } from '@/utils/helpers';

function countTotalPrice(cart: InitialCart): number {
  return cart.reduce((acc, { price }) => (acc += price), 0);
}

function countTotalPrices(rates: Rate[], total: number) {
  return simplePipe<Rate[]>(rates).map<RawRates>(rates => {
    return rates.reduce((acc, { key, value }) => {
      return { ...acc, [key]: Number((value * total).toFixed(2)) };
    }, {});
  }).value;
}

export { countTotalPrice, countTotalPrices };
