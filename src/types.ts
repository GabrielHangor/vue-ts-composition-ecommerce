import type { btnVariants } from './constatnts';

export type BtnVariant = typeof btnVariants[number];

export interface ILocationAndTimeFormValues {
  pickupFrom: string;
  dropOff: string;
  pickupDate: string;
  pickupTime: string;
  dropOffDate: string;
  dropOffTime: string;
}
