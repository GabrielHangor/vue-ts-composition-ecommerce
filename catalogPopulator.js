const fs = require('fs');

const citiesListData = require('./src/mocks/mocks.ts');

for (let i = 0; i <= 100; i++) {
  const randomCity = citiesListData[Math.floor(Math.random() * citiesListData.length)];
  const carObj = JSON.stringify({ id: i, city: randomCity });
  fs.writeFileSync('./cars.json', carObj);
}
