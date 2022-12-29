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
}

export interface IUseVehiclesParams {
  currentPage: Ref<number>;
  sortOrderASC: Ref<boolean>;
  sortBy: Ref<string>;
  activeLocationFilters: Ref<ILocationAndTimeFormValues>;
}

export interface ISelectOption {
  value: string | number;
  name: string;
}

export interface ISelectOptions {
  baseOption: ISelectOption;
  options: ISelectOption[];
}
