// Unix Epoch - January 1 1970 00:00:00
// 0 -> that exact time and date
// positive numbers in milliseconds since that moment
// negative numbers before that moment
const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.toString());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const dateOne = new Date('September 11 2001 11:00:00');
const dateTwo = new Date('September 22 1977 05:30:00');

const dateOneTS = dateOne.getTime();
const dateTwoTS = dateTwo.getTime();

if (dateOneTS < dateTwoTS) {
  console.log(dateOne.toString());
} else {
  console.log(dateTwo.toString());
}
