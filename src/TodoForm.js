import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
   <div className="container">
     <form className="ajout text-center mb-5" onSubmit={handleSubmit}>
      <label className="text-light mb-3">Ajouter une tache</label> <br />
      <input
        type="text"
        className="form-control m-auto"
        name="ajout"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
   </div>
  );
};

export default TodoForm;
