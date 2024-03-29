export const btnVariants = ['primary', 'transparent', 'transparent-orange'] as const;

export const citiesListData = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Philadelphia',
  'Phoenix',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'San Francisco',
  'Indianapolis',
  'Columbus',
  'Fort Worth',
  'Charlotte',
  'Seattle',
  'Denver',
  'El Paso',
  'Detroit',
  'Washington',
  'Boston',
  'Memphis',
  'Nashville',
  'Portland, Ore.',
  'Oklahoma City',
  'Las Vegas',
  'Baltimore',
  'Louisville',
  'Milwaukee',
  'Albuquerque',
  'Tucson',
  'Fresno',
  'Sacramento',
  'Kansas City, Mo.',
  'Long Beach',
  'Mesa',
  'Atlanta',
  'Colorado Springs',
  'Virginia Beach',
  'Raleigh',
  'Omaha',
  'Miami',
  'Oakland',
  'Minneapolis',
  'Tulsa',
  'Wichita',
  'New Orleans',
  'Arlington, Texas',
  '',
] as const;

export const transmission = ['AT', 'MT'] as const;
export const numberOfSeats = [4, 5] as const;
export const deposit = [100, 150, 200, 250, 300] as const;
export const carType = ['Sedan', 'Compact', 'Economy', 'Midsize', 'FullSize', 'Mini', 'Luxury'] as const;
export const capacity = ['2', '3-5', '6+'];
export const VEHICLES_PER_PAGE = 6;

export const filterEvents = [
  'updateCarTypeFilters',
  'updateModelFilters',
  'updateCapacityFilters',
  'updateBabySeatFilters',
  'updateTransmissionFilters',
  'updateVideoRecorderFilters',
  'updateDepositTypeFilters',
] as const;

export const filterColumns = [
  'carType',
  'model',
  'capacity',
  'babySeat',
  'transmission',
  'videoRecorder',
  'deposit',
];

export const filterNameMap = {
  carType: 'Car Type',
  model: 'Model',
  capacity: 'Capacity',
  babySeat: 'Baby Seat',
  transmission: 'Transmission',
  videoRecorder: 'Video Recorder',
  deposit: 'Deposit',
};
