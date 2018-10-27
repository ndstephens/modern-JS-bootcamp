//? NAMED export, for multiple exports
// export const add = (a, b) => a + b;
const add = (a, b) => a + b;

// export const name = 'Nate';
const name = 'Nate';

//
//? DEFAULT export, can only be used once per file
const square = (x) => x * x;
// export default square;

console.log('from my code');
//? OR can put all exports in one place
export { add, name, square as default };
