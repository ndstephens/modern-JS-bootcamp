import uuidv4 from 'uuid/v4';
import { getFilters } from './filters';

let todos = [];

//? Fetch existing todos from localStorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  // if the JSON data in local storage is invalid then catch the error and return an empty array
  try {
    todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    todos = [];
  }
};

//? Fetch todos for use in other modules
const getTodos = () => todos;

//? Save todos to Local Storage
const saveTodosLS = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

//? Add todo to 'todos' array
const createTodo = (todoText) => {
  todos.push({
    id: uuidv4(),
    text: todoText,
    completed: false,
  });
  saveTodosLS();
};

//? Remove todo by ID from 'todos' array (saveTodosLS will update/sync the 'todos' array in local storage)
const removeTodo = (id) => {
  // use 'findIndex()', not 'indexOf()', b/c we need to use a callback and not just a parameter
  // need the index of the todo (not just the todo itself) so we can mutate the todos array
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    saveTodosLS();
  }
};

//? Toggle todo's completed property between false and true
const toggleTodo = (id) => {
  // only need the todo (not its index) since we're only mutating the todo itself, not the todos array
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodosLS();
  }
};

//? Filter array of todos with 'filters' object
const filterTodos = () => {
  const filters = getFilters();

  return todos
    .filter((todo) => {
      // return only todos who's text includes search input
      return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    .filter((todo) => {
      // return only todos that are still NOT completed
      return filters.hideCompleted ? !todo.completed : true;
    });
};

//? Populate todos array from LS when app is started
loadTodos();

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo, filterTodos };
