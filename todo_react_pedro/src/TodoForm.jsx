import { useState } from "react"

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState("")
    const enviaTarefa = (e) =>{
        e.preventDefault()
        if (!input) return
        addTodo(input)
        setInput("")
        console.log("clicado")
    }
  return (
    <div>
      <form onSubmit={enviaTarefa}>
        <h3>Criar tarefa: </h3>
        <input
        type="text"
        value={input}
        placeholder="Digite a sua tarefa..."
        onChange={(e) => setInput(e.target.value) }
        >
        </input>
        <button type='submit'>Criar tarefa </button>
      </form>
    </div>
  )
}

export default TodoForm
