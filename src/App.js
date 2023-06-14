import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="container-fluid w-50 p-5">
      <header className="text-center text-light">
        <h1 className="mb-4">Todo List Redux</h1>
        <TodoForm />
      </header>
      <TodoList />
    </div>
  );
};

export default App;
