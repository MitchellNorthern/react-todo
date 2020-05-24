import React, { useState } from 'react'
import './Todo.css'
import { ReactComponent as Edit } from '../../../assets/svgs/edit.svg'
import { ReactComponent as Trash } from '../../../assets/svgs/trash.svg'

const Todo = props => {

    const [isEditing, setIsEditing] = useState(false)
    const [todoClasses, setTodoClasses] = useState('todo')
    const [todoText, setTodoText] = useState(props.todo.text)

    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.setTodo(props.todo.id, todoText)
            setIsEditing(false)
        }
    }

    const handleDelete = () => {
        setTodoClasses('todo todo-ease-out')
        setTimeout(() => {
            props.setTodo(props.todo.id, null)
        }, 200)
    }

    return (
        <div className={todoClasses}>
            {
                isEditing
                    ? <input
                        className="todo-edit"
                        type="text"
                        placeholder={props.todo.text}
                        name={'editTodo' + props.todo.id}
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        onKeyDown={(e) => handleEnterPress(e)} />
                    : <h4 className="todo-text">{props.todo.text}</h4>
            }
            <button className="todo-action-button"
                onClick={() => setIsEditing(!isEditing)}>
                <Edit className="todo-icon" />
            </button>
            <button className="todo-action-button"
                onClick={() => handleDelete()}>
                <Trash className="todo-icon" />
            </button>
        </div >
    )
}

export default Todo