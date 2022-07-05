import React from 'react'
import Todo from './Todo.js'

export default function TodoList({todos, toggleTodos, removeTodos}) {
  return (
    <ul className='todo' id='todoList'>
    {todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodos={toggleTodos} removeTodos={removeTodos}/>)}
    </ul>
  );
}
 