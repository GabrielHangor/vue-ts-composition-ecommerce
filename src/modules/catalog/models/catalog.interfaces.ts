import type { Capacity, CarType, City, Deposit, NumberOfSeats, Transmission } from './catalog.types';
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
  model: string;
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

export interface IVehiclesMinRentalCostGroupedByFilterType {
  babySeat: { [key: string]: number };
  capacity: { [key: string]: number };
  carType: { [key: string]: number };
  deposit: { [key: string]: number };
  model: { [key: string]: number };
  transmission: { [key: string]: number };
  videoRecorder: { [key: string]: number };
  [key: string]: any;
}

export interface IVehiclesCountGroupedByFilterType extends IVehiclesMinRentalCostGroupedByFilterType {
  rentalCost?: { [key: string]: number };
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
  carCapacities: string[];
  carTransmission: string[];
  carDeposit: string[];
  carVideoRecorder: string[];
  carBabySeat: string[];
}

export interface IGetVehiclesCountRequestParams {
  priceRange: IPriceRange;
  location: string;
}

export interface IUseCatalogArgs {
  currentPage: Ref<number>;
  sortOrderASC: Ref<boolean>;
  sortBy: Ref<string>;
  activeLocationFilters: Ref<ILocationAndTimeFormValues>;
  priceRange: Ref<IPriceRange>;
  activeCarTypeFilters: Ref<string[]>;
  activeCarModelFilters: Ref<string[]>;
  activeCarCapacityFilters: Ref<string[]>;
  activeCarTransmissionFilters: Ref<string[]>;
  activeCarDepositFilters: Ref<string[]>;
  activeCarVideoRecorderFilters: Ref<string[]>;
  activeCarBabySeatFilters: Ref<string[]>;
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
