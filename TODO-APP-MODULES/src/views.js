import { getTodos, filterTodos, toggleTodo, removeTodo } from './todos';

//? Render todos based on filters
const renderTodos = () => {
  const todosListDOM = document.querySelector('#todos-list');
  const incompleteTodos = getTodos().filter((todo) => !todo.completed);
  const filteredTodos = filterTodos();

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
    toggleTodo(todo.id);
    renderTodos();
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
    renderTodos();
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

//? Render DOM elements for 'incomplete' todo summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  const todoSpelling = incompleteTodos.length === 1 ? 'todo' : 'todos';
  summary.classList.add('list-title');
  summary.textContent = `You have ${incompleteTodos.length} ${todoSpelling} left.`;

  return summary;
};

export { renderTodos };
