import { setFilters } from './filters';
import { createTodo, loadTodos } from './todos';
import { renderTodos } from './views';

//? Init rendering of 'todos' array
renderTodos();

//? Filter todos by search string
document.querySelector('#search-todos').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderTodos();
});

//? Filter: render only incomplete todos
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  setFilters({
    hideCompleted: e.target.checked,
  });
  renderTodos();
});

//? Create new todo, save to 'todos' array and localStorage, render
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = e.target.elements.todoText.value.trim();
  if (todoText.length) {
    createTodo(todoText);
    renderTodos();
  }
  e.target.elements.todoText.value = '';
});

//? Watcher for Local Storage (keeps multiple windows or tabs of running app in sync)
window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    loadTodos();
    renderTodos();
  }
});
