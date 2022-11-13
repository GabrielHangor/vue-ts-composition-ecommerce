import fs from 'fs';
import { citiesListData, carBrands } from './mocks/mocks';

const carEntityArr = [];

for (let i = 0; i <= 100; i++) {
  const randomCity = citiesListData[Math.floor(Math.random() * citiesListData.length)];
  const randomCar = carBrands[Math.floor(Math.random() * carBrands.length)];
  const carObj = { id: i, city: randomCity, brand: randomCar };
  carEntityArr.push(carObj);
}

fs.writeFileSync('./cars.json', JSON.stringify(carEntityArr));
