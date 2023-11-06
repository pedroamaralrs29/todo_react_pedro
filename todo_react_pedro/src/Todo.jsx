const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div>
        <div>
            <div style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
                <p> {todo.text}</p>
            </div>
            <div>
            <button  onClick={() => removeTodo(todo.id)} > X</button>
            <button  onClick={() => completeTodo(todo.id)} > Concluir tarefa </button>
            </div>
        </div>
      
    </div>
  )
}

export default Todo
