// import './utilities';
// import { add, name } from './utilities';
//* Default export can be named anything, and comes before the curly braces
// import otherSquare from './utilities';
import otherSquare, { add, name } from './utilities';
import otherScream from './scream';

console.log('index.js');
console.log(add(4, 2));
console.log(otherScream(name));
console.log(otherSquare(10));
