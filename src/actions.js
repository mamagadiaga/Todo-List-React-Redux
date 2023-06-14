
let nextTodoId = 1;

export const addTodo = (task) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextTodoId++,
    task,
  },
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: {
      id,
    },
  });
  export const toggleComplete = (id) => ({
    type: 'TOGGLE_COMPLETE',
    payload: {
      id,
    },
  });