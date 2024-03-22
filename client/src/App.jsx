import { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import Api from './common/api'
import toast, { Toaster } from 'react-hot-toast'


function App() {
  const [todos, setTodos] = useState(null)
  const [modified, setModified] = useState(true)
  const [text, setText] = useState('')

  const getTodos = async() => {
    const allTodos = await Api.getTodos()

    setTodos(allTodos)
  }

  const checkTodo = async (id, isDone) => {
    const checked = await Api.checkTodo(id, !isDone)

    if(checked){
      toast.success('Ticked')
      setModified(!modified)
  }
  }
  const deleteTodo = async (id) => {
      const deleted = await Api.deleteTodo(id)

      if(deleted){
          toast.success('Todo deleted successfully')
          setModified(!modified)
      }
  }
  const createTodo = async (text) => {
      const checked = await Api.createTodo(text)
      if(checked){
          toast.success('Todo added successfully')
          setModified(!modified)
          setText('')
      }
  }
  const editTodo = async (id, text) => {
      const checked = await Api.editTodo(id, text)
      if(checked){
          toast.success('Todo edited successfully')
          setModified(!modified)
          setText('')
      }
  }

  useEffect(() => {
    getTodos()
    console.log(import.meta.env.VITE_BACKEND_URL)
  }, [modified])

  return (
    <div style={{maxWidth: "600px", margin: "0 auto"}}>
      <nav style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
        <Toaster />
        <h1>TODOLIST</h1>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
          <button onClick={() => createTodo(text)}>create</button>
        </div>
      </nav>
      {
        todos?.map((todo) => {
          return <TodoItem key={todo._id} todoItem={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        })
      }
    </div>
  )
}

export default App
