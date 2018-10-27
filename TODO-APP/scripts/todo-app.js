'use strict';

let todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false,
};

//? Init rendering of 'todos' array
renderTodos(todos, filters);

//? Filter todos by search string
document.querySelector('#search-todos').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

//? Filter: render only incomplete todos
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

//? Create new todo, save to 'todos' array and localStorage, render
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = e.target.elements.newTodo.value.trim();
  if (newTodo.length) {
    addTodo(newTodo, todos);
    saveTodosLS(todos);
    renderTodos(todos, filters);
  }
  e.target.elements.newTodo.value = '';
});
