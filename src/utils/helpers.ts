import { SimplePipe } from '@/utils/types';

function simplePipe<T>(value: T): SimplePipe<T> {
  return {
    map<K>(fn: (value: T) => K) {
      return simplePipe(fn(value));
    },
    value,
  };
}

export { simplePipe };
