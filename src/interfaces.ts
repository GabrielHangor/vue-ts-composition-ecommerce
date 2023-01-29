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

export interface ICarType {
  Luxury: number;
  Mini: number;
  Compact: number;
  Midsize: number;
  'Full-size': number;
  Economy: number;
}

export interface IModel {
  'Audi TT': number;
  'VW Beetle': number;
  'BMW M5': number;
  'Jaguar XJ': number;
  'Fiat Fullback': number;
  'VW Polo Sedan': number;
}

interface ICapacity {
  2: number;
  '3-5': number;
  '6+': number;
}

interface IBabySeat {
  false: number;
  true: number;
}

interface ITransmission {
  MT: number;
  AT: number;
}

interface IVideoRecorder {
  false: number;
  true: number;
}

interface IDeposit {
  100: number;
  150: number;
  200: number;
  250: number;
  300: number;
}

export interface IVehiclesCountGroupedByFilterType {
  carType: ICarType;
  model: IModel;
  capacity: ICapacity;
  babySeat: IBabySeat;
  transmission: ITransmission;
  videoRecorder: IVideoRecorder;
  deposit: IDeposit;
}

export interface IGetVehiclesRequestParams {
  sortBy: string;
  sortOrderASC: boolean;
  offset: number;
  limit: number;
  location: City | null;
  priceRange: IPriceRange;
  carTypes: string[];
  carModels: string[];
}

export interface IGetVehiclesCountRequestParams {
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
  activeCarModelFilters: Ref<string[]>;
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
