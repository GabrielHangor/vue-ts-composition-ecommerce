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
export const carTypes = [
  { name: 'Economy' },
  { name: 'Midsize' },
  { name: 'Compact' },
  { name: 'Luxury' },
  { name: 'Mini' },
  { name: 'Full-size' },
  { name: 'Sedan' },
];

export const carModels = [
  { name: 'VW Polo Sedan' },
  { name: 'Jaguar XJ' },
  { name: 'BMW M5' },
  { name: 'Audi TT' },
  { name: 'VW Beetle' },
  { name: 'Fiat Fullback' },
];

export const carCapacities = [{ name: '2' }, { name: '3-5' }, { name: '6+' }];

export const filterColumns = [
  'carType',
  'model',
  'capacity',
  'babySeat',
  'transmission',
  'videoRecorder',
  'deposit',
];
