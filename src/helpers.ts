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
