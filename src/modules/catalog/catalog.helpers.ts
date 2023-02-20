import type { Ref } from 'vue';
import type {
  IVehiclesCountGroupedByFilterType,
  IVehiclesMinRentalCostGroupedByFilterType,
} from '@/modules/catalog/models/catalog.models';

export const delay = (value: number) => {
  return new Promise<void>((res) => {
    setTimeout(() => res(), value);
  });
};

export const getNormalizedUrlQueryVal = (replaceableVal: any, oldVal: string) => {
  let newVal;

  if (typeof replaceableVal === 'number') newVal = Number(oldVal);
  if (typeof replaceableVal === 'string') newVal = oldVal;
  if (typeof replaceableVal === 'boolean') newVal = oldVal === 'true';

  return newVal;
};

export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
  isDisabled: Ref<boolean>
) => {
  let timeout: ReturnType<typeof setTimeout>;

  const debounced = (...args: any) => {
    if (isDisabled.value) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const getNormalizedMinRentalCost = (
  vehiclesArr: IVehiclesCountGroupedByFilterType[]
): IVehiclesMinRentalCostGroupedByFilterType => {
  const properties = [
    'babySeat',
    'capacity',
    'carType',
    'deposit',
    'model',
    'transmission',
    'videoRecorder',
  ];

  const result = {} as IVehiclesMinRentalCostGroupedByFilterType;

  vehiclesArr.forEach((vehicle) => {
    const { rentalCost, ...rest } = vehicle;

    if (typeof rentalCost !== 'number') {
      return;
    }

    properties.forEach((property) => {
      const propertyValue = rest[property];

      if (!result[property]) {
        result[property] = {};
      }

      if (!result[property][propertyValue] || rentalCost < result[property][propertyValue]) {
        result[property][propertyValue] = rentalCost;
      }
    });
  });

  return result;
};

export const countPropsInArrOfObjs = (arr: any[], prop: string) => {
  const count = {} as { [key: string]: number };
  for (const obj of arr) {
    const value = obj[prop];
    count[value] = (count[value] || 0) + 1;
  }
  return count;
};

export const scrollToTopSmoothly = () => {
  const currentY = window.scrollY;
  const targetY = 0;
  const step = (targetY - currentY) / 20;
  let count = 0;
  const scroll = () => {
    count++;
    window.scrollTo(0, currentY + count * step);
    if (count < 20) {
      window.requestAnimationFrame(scroll);
    }
  };
  window.requestAnimationFrame(scroll);
};
