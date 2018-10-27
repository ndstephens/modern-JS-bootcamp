//? DESTRUCTURING OBJECTS
const todo = {
  id: 'asdfds',
  text: 'Pay the bills',
  completed: false,
};

//* can rename variables if we want (text: todoText)
//* can give default values to props that don't exist ('details')
//* (can also do both at the same time)
//* can use the REST parameter for remaining unused props (puts them into an object)
let { text: todoText, completed, details = 'No details provided', ...others } = todo;

console.log(todoText); // 'Pay the bills'
console.log(completed); // false
console.log(details); // 'No details provided'
console.log(others); // { id: 'asdfds'}

//
//
//? DESTRUCTURING ARRAYS

const ages = [65, 0, 13, 21, undefined, 18, 19];
//* use an empty space to skip it
const [retirement, , teenage, drinking, random = 46, ...otherAges] = ages;

console.log(retirement); // 65
// console.log(none);
console.log(teenage); // 13
console.log(drinking); // 21
console.log(random); // 46
console.log(otherAges); // [ 18, 19 ]

//
//
//? DESTRUCTURING w/ FUNCTION ARGUMENTS

const printTodo = (todo) => {
  console.log(`${todo.text}: ${todo.completed}`);
};
printTodo(todo);

//* DESTRUCTURED
const printTodoDestr = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};
printTodoDestr(todo);
