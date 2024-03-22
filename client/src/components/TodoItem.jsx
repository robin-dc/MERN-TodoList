import { useState } from 'react'
import Api from '../common/api'
import toast from 'react-hot-toast'

const TodoItem = ({todoItem, checkTodo, deleteTodo, editTodo}) => {
    const {_id, todo, isDone} = todoItem
    const [text, setText] = useState('')
    const [showEdit, setShowEdit] = useState(false)

    return(
        <article style={{display: 'flex', alignItems: "center", justifyContent: "space-between"}}>
            <h2 style={{textDecoration: isDone ? 'line-through' : 'none'}}>{todo}</h2>
            <div>
                <button onClick={ () => checkTodo(_id, isDone)}>done</button>
                <button onClick={ () => deleteTodo(_id)}>delete</button>
                <button onClick={ () => setShowEdit(!showEdit)}>edit</button>
                {showEdit && (
                    <>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                        <button onClick={() => {
                            setText('')
                            setShowEdit(false)
                            editTodo(_id, text)
                        }}>save</button>
                    </>
                )}
            </div>
        </article>
    )
}

export default TodoItem
