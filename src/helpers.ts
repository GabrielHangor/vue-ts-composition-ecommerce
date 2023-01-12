export const getCarType = (model) => {
  const carTypes = {
    'VW Polo Sedan': 'Economy',
    'Jaguar XJ': 'Midsize',
    'BMW M5': 'Compact',
    'Audi TT': 'Luxury',
    'VW Beetle': 'Mini',
    'Fiat Fullback': 'Full-size',
  };

  return carTypes[model];
};

export const delay = (value: number) => {
  return new Promise<void>((res) => {
    setTimeout(() => res(), value);
  });
};

export const getImgPath = (model) => {
  const carTypes = {
    'VW Polo Sedan': '/VW-Polo.png',
    'Jaguar XJ': '/Jaguar.png',
    'BMW M5': '/BMW-M5.png',
    'Audi TT': '/AUDI-TT.png',
    'VW Beetle': '/VW-Beetle.png',
    'Fiat Fullback': '/Fiat.png',
  };

  return carTypes[model];
};

export const getNormalizedUrlQueryVal = (replaceableVal: any, oldVal: string) => {
  let newVal;

  if (typeof replaceableVal === 'number') newVal = Number(oldVal);
  if (typeof replaceableVal === 'string') newVal = oldVal;
  if (typeof replaceableVal === 'boolean') newVal = oldVal === 'true';

  return newVal;
};

export const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
