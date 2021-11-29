
import React from 'react';
import { connect } from 'react-redux';
import { setTodo, addTodo, updateTodo } from '../actions';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function TodoForm(props) {
  let history = useHistory();
  const { todo, updatingTodoIndex } = props.todos;

  
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...todo, [name]: value };
    props.setTodo(updatedTodo);
  }

useEffect(() => {
  
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
}, [])

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(props.todos.records));

  }, [props.todos.records]);
  const handleSubmit = (event) => {

    event.preventDefault();
  
    if (!todo.title) return;
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      props.addTodo({ ...todo, id: new Date().getTime() });
    } else {

      props.updateTodo({ ...todo });
    }
  }
  const allShow = () => {
    history.push('/TodoList')
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input name="title" value={todo.title} onChange={handleChangeInput} />
          </label>
        </div><br />
        <div><br />
          <label>
            Description:
            <textarea name="description" value={todo.description} onChange={handleChangeInput} />
          </label><br />
        </div>
        <div><br />
          <Button varient="danger" type="submit">{updatingTodoIndex ? 'Update' : 'Submit'}</Button>
        </div><br />
     <Button varient="succsess" onClick={allShow}>showAll</Button>      <Button varient="warning">Completed todos</Button>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  setTodo,
  addTodo,
  updateTodo,
};

export default connect(mapState, mapDispatch)(TodoForm);