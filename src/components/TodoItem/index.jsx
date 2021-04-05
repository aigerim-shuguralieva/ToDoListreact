import React, {useContext} from 'react'
import './TodoItem.css'
import {Context} from '../../context'


export const TodoItem = ({ todo ,id}) => {
   
    const { deleteTodo, completeTodo } = useContext(Context)

return <div className="todo-item" style={todo.complete ? ready : notReady}>
   
            <div className="todo-groups">
                            <div className="text">{todo.text}</div>
                <button onClick={() => completeTodo(id)}  className="btn-com">{todo.complete ? "good job" : "done"}</button>
                <button onClick={() => deleteTodo(id)} className="btn-del">delete</button>
            </div>
        </div>
}

const ready = {
    textDecoration: "line-through"
}

const notReady = {
    textDecoration: "none"
}