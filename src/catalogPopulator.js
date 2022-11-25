import fs from 'fs';

import { carModels, citiesListData, depositAmount } from './mocks/mocks.js';
import { getCarType } from './helpers.js';

const carEntityArr = [];

for (let i = 0; i <= 500; i++) {
  const randomCity = citiesListData[Math.floor(Math.random() * citiesListData.length)];
  const model = carModels[Math.floor(Math.random() * carModels.length)];
  const babySeat = Math.random() < 0.5;
  const numberOfSeats = [4, 5][Math.floor(Math.random() * [4, 5].length)];
  const transmission = ['AT', 'MT'][Math.floor(Math.random() * ['AT', 'MT'].length)];
  const releaseYear = new Date(
    new Date(2005, 0, 1).getTime() +
      Math.random() * (new Date().getTime() - new Date(2005, 0, 1).getTime())
  ).getFullYear();
  const deposit = depositAmount[Math.floor(Math.random() * depositAmount.length)];
  const rentalCost = Number((Math.random() * (100 - 20 + 1) + 20).toFixed(2));
  const carType = getCarType(model);
  const capacity = ['2', '3-5', '6+'][Math.floor(Math.random() * ['2', '3-5', '6+'].length)];
  const mileage = Math.floor(Math.random() * (300000 - 2 + 1) + 2);
  const videoRecorder = Math.random() < 0.5;

  const carObj = {
    id: i,
    createdAt: null,
    city: randomCity,
    model,
    babySeat,
    numberOfSeats,
    transmission,
    releaseYear,
    deposit,
    rentalCost,
    carType,
    capacity,
    mileage,
    videoRecorder,
  };
  carEntityArr.push(carObj);
}

fs.writeFileSync('./cars.json', JSON.stringify(carEntityArr));
