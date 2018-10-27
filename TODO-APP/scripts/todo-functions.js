'use strict';

//? Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  // if the JSON data in local storage is invalid then catch the error and return an empty array
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

//? Add todo to 'todos' array
const addTodo = (newTodo, todos) => {
  todos.push({
    id: uuidv4(),
    text: newTodo,
    completed: false,
  });
};

//? Save todos to local storage (sync with the 'todos' array)
const saveTodosLS = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

//? Remove todo by ID from 'todos' array (saveTodosLS will update/sync the 'todos' array in local storage)
const removeTodo = (id) => {
  // use 'findIndex()', not 'indexOf()', b/c we want to use a callback and not just a parameter
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

//? Filter array of todos with 'filters' object
const filterTodos = (todos, filters) => {
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
//* ALTERNATIVE TO filterTodos()
const filterTodosALT = (todos, filters) => {
  return todos.filter((todo) => {
    // only todos who's text includes search input
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    // only todos that are still NOT completed
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });
};

//? Render DOM elements for 'incomplete' todo summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  const todoSpelling = incompleteTodos.length === 1 ? 'todo' : 'todos';
  summary.classList.add('list-title');
  summary.textContent = `You have ${incompleteTodos.length} ${todoSpelling} left.`;
  return summary;
};

//? Render DOM elements for each todo
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const checkboxEl = document.createElement('input');
  const todoTextEl = document.createElement('span');
  const removeButtonEl = document.createElement('button');

  // Setup todo label
  todoEl.classList.add('list-item');

  // Setup todo container
  containerEl.classList.add('list-item__container');
  todoEl.appendChild(containerEl);

  // Setup todo checkbox
  checkboxEl.setAttribute('type', 'checkbox');
  checkboxEl.checked = todo.completed;
  checkboxEl.addEventListener('change', (e) => {
    todo.completed = checkboxEl.checked;
    saveTodosLS(todos); // must update local storage
    renderTodos(todos, filters);
  });
  containerEl.appendChild(checkboxEl);

  // Setup todo text
  todoTextEl.textContent = todo.text;
  containerEl.appendChild(todoTextEl);

  // Setup remove button
  removeButtonEl.textContent = 'remove';
  removeButtonEl.classList.add('button', 'button--text');
  removeButtonEl.addEventListener('click', (e) => {
    removeTodo(todo.id);
    saveTodosLS(todos); // must update local storage
    renderTodos(todos, filters);
  });
  todoEl.appendChild(removeButtonEl);

  return todoEl;

  // <label class="list-item">                             todoEl
  //   <div class="list-item__container">                  containerEl
  //     <input type="checkbox">                           checkboxEl
  //     <span>(todo text)</span>                          todoTextEl
  //   </div>
  //   <button class="button button--text">remove</button> removeButtonEl
  // </label>
};

//? Render todos based on filters
const renderTodos = (todos, filters) => {
  const todosListDOM = document.querySelector('#todos-list');
  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const filteredTodos = filterTodos(todos, filters);

  todosListDOM.innerHTML = '';

  // Render incomplete todo summary
  todosListDOM.appendChild(generateSummaryDOM(incompleteTodos));

  if (filteredTodos.length) {
    // Render each todo
    filteredTodos.forEach((todo) => {
      todosListDOM.appendChild(generateTodoDOM(todo));
    });
  } else {
    const emptyMessageEl = document.createElement('p');
    emptyMessageEl.classList.add('empty-message');
    emptyMessageEl.textContent = 'No to-dos to show';
    todosListDOM.appendChild(emptyMessageEl);
  }
};
