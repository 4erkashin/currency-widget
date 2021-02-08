export type SimplePipe<T> = {
  map<K>(fn: (value: T) => K): SimplePipe<K>;
  value: T;
};

export type InitialCart = Array<{ price: number }>;
