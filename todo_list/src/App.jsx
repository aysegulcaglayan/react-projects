import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  }



  return (
    <div className="App">
      <div >
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
