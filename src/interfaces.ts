import type { Capacity, CarModel, CarType, City, Deposit, NumberOfSeats, Transmission } from './types';
import type { Ref } from 'vue';

export interface ILocationAndTimeFormValues {
  pickupFrom: City;
  dropOff: City;
  pickupDate: string;
  pickupTime: string;
  dropOffDate: string;
  dropOffTime: string;
}

export interface IVehicleEntity {
  id: number;
  createdAt: Date;
  city: City;
  model: CarModel;
  babySeat: boolean;
  numberOfSeats: NumberOfSeats;
  transmission: Transmission;
  releaseYear: number;
  deposit: Deposit;
  rentalCost: number;
  carType: CarType;
  capacity: Capacity;
  mileage: number;
  videoRecorder: boolean;
  imgPath: string;
}

export interface IGetVehiclesRequestParams {
  sortBy: string;
  sortOrderASC: boolean;
  offset: number;
  limit: number;
  location: City | null;
  priceRange: IPriceRange;
  carTypes: string[];
}

export interface IGetVehiclesTypeCountRequestParams {
  priceRange: IPriceRange;
  location: string;
}

export interface IUseVehiclesArgs {
  currentPage: Ref<number>;
  sortOrderASC: Ref<boolean>;
  sortBy: Ref<string>;
  activeLocationFilters: Ref<ILocationAndTimeFormValues>;
  priceRange: Ref<IPriceRange>;
  activeCarTypeFilters: Ref<string[]>;
}

export interface ISelectOption {
  value: string | number;
  name: string;
}

export interface ISelectOptions {
  baseOption: ISelectOption;
  options: ISelectOption[];
}

export interface IMap<T> {
  [key: string]: T;
}

export interface IUseSearchParams<T> {
  [key: string]: T;
}

export interface IPriceRange {
  minPrice: number | null;
  maxPrice: number | null;
}

export interface IVehiclesTypeCount {
  Compact: number;
  Economy: number;
  'Full-size': number;
  Luxury: number;
  Midsize: number;
  Mini: number;
  Sedan: number;
}
