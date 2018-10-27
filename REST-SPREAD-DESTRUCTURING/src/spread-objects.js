const house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017,
};

const otherHouse = {
  basement: true,
  ...house, //* copies in the properties, but NOT by reference
  bedrooms: 3, //* can overwrite properties that exist in the spread object
};

//* THEY ARE INDEPENDENT COPIES OF EACH OTHER, NOT REFERENCES
//* changing the 'house' object here does NOT effect the spread 'house' object within 'otherHouse'
house.yearBuilt = 2018;

console.log(house);
console.log(otherHouse); //* 'otherHouse.yearBuilt' is still 2017

//
//?------------------------------------------
//

const person = {
  name: 'Nate',
  age: 40,
};
const location = {
  city: 'Stroudsburg',
  country: 'USA',
};

const overview = {
  ...person,
  ...location,
};

console.log(overview);
