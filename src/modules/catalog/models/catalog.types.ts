import type {
  btnVariants,
  capacity,
  carType,
  citiesListData,
  deposit,
  numberOfSeats,
  transmission,
} from '../catalog.constants';

export type BtnVariant = typeof btnVariants[number];


export type City = typeof citiesListData[number];
export type NumberOfSeats = typeof numberOfSeats[number];
export type Transmission = typeof transmission[number];
export type Deposit = typeof deposit[number];
export type CarType = typeof carType[number];
export type Capacity = typeof capacity[number];

export type filterEvents =
  | keyof any
  | 'updateCarTypeFilters'
  | 'updateModelFilters'
  | 'updateCapacityFilters'
  | 'updateBabySeatFilters'
  | 'updateTransmissionFilters'
  | 'updateVideoRecorderFilters'
  | 'updateDepositTypeFilters';
