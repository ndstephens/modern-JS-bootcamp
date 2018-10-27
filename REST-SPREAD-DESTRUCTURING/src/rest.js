const calculateAverage = (numOne, numTwo) => {
  return (numOne + numTwo) / 2;
};

console.log(calculateAverage(0, 100));

//
//
//* USING THE REST PARAMETER
const calculateAverageRest = (...numbers) => {
  // let sum = 0;
  // numbers.forEach((num) => (sum += num));
  // return sum / numbers.length;
  return numbers.reduce((acc, num) => acc + num) / numbers.length;
};

console.log(calculateAverageRest(0, 100, 250, 50));

//
//
//* USING ADDITIONAL ARGUMENTS WITH REST
const calculateAverageRestArg = (thing, ...numbers) => {
  const average = numbers.reduce((acc, num) => acc + num) / numbers.length;
  return `The average ${thing} is ${average}.`;
};

console.log(calculateAverageRestArg('grade', 0, 100, 250, 50));

//
//
//? CHALLENGE
const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(', ')}`);
};
printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');
