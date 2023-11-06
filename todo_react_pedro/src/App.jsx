import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import Todo from './Todo'
import Clock from './Clock'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar react",
      isCompleted: false,
    }
  ])

  const addTodo = (text) =>{
    const newTodos = [...todos, {
      id: Math.floor(Math.random()*1000), 
      text,
      isCompleted: false,

    },
  ];
  setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)

  }

  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted: todo)
    setTodos(newTodos)
  }
  
  return (
    <div className='app'>
    <h1>To-do List </h1> 
    <ul className='todo-list'>
      {todos.map((todo)=> (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </ul>
    <h2> Lista de tarefas </h2>
    <TodoForm addTodo ={addTodo}/>
    <h4><Clock /></h4>
  
    
    </div>
  )
}

export default App
