const todos = [
  {
    text: 'Study programming',
    completed: true,
  },
  {
    text: 'Go food shopping',
    completed: true,
  },
  {
    text: 'Laundry',
    completed: false,
  },
  {
    text: 'Catch up on emails',
    completed: true,
  },
  {
    text: 'Work on WordPress site',
    completed: false,
  },
];

const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = function(todos) {
  return todos.filter(function(todo) {
    return !todo.completed;
  });
};

const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
    // return a.completed - b.completed;  // this single line works and is obviously simpler
  });
};

sortTodos(todos);
console.log(todos);
// console.log(getThingsToDo(todos));

// deleteTodo(todos, 'catch up on emails');
// console.log(todos);
