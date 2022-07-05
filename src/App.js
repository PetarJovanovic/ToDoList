import { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';

const fromLocalStorage = () => {
  const storedTodos = localStorage.getItem('storedTodos');
  if (storedTodos) return JSON.parse(localStorage.getItem('storedTodos'));
  return[];
}

function App() {
  const [todos, setTodos] = useState(fromLocalStorage);
  const todoTitleRef = useRef();

  useEffect (() => {
    localStorage.setItem('storedTodos', JSON.stringify(todos));
  }, [todos]);

  const addTodos = () => {
    const title = todoTitleRef.current.value;
    if (title === '') return;
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), title: title, complete: false }]);
    todoTitleRef.current.value = null;
  }

  const toggleTodos = id => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const removeTodos = (e, id) => {
    e.stopPropagation();
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Todo List</h1>
        <form className='header__input-form' onSubmit={addTodos}>
          <input ref = {todoTitleRef} type = "text" id='txtTodoItemToAdd'/>
          <button type='submit' id='btnAddTodo'>Add Todo</button>
        </form>
      </header>
      <TodoList todos={todos} toggleTodos={toggleTodos} removeTodos={removeTodos}/>
    </>
  );
}

export default App;
