import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, setUpdatingTodoIndex, deleteTodo } from '../actions';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function TodoList () {
    let history = useHistory();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

   const handleEdit = (todoId) => {
    history.push('/todo');
    const todoIndex = todos.records.findIndex((todo) => todo.id === todoId);
    dispatch(setUpdatingTodoIndex(todoIndex));

  }

  const handleDelete = (todoId) => {
   
    dispatch(deleteTodo(todoId));
  }

  const handleComplete = (event, todoId) => {
    dispatch(completeTodo({ todoId, completed: event.target.checked }));
  }
  const showComplete =()=>{
    if(completed==true){
      const data =completed
    }
  }

  return (
      <>
      <div>
   <p>{data}</p>
      </div>
    <div>
      <ol>
        {todos.records.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.title}: {todo.description}
            </span>
            <span>
              <Button  varient="danger"onClick={() => handleDelete(todo.id)}>Delete</Button>
              <button onClick={() => handleEdit(todo.id)}>Edit</button>
              <label>
                complete
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={(event) => handleComplete(event, todo.id)}
                />
              </label><br/><br/>
            </span>
          </li>
        ))}
      </ol>
      <Button onClick={showComplete}>complete</Button>
    </div>
    </>
  );
}