import React, { useState } from 'react'
import Todo from './Todo'
import './TodoList.css'

const TodoList = () => {

    const [todoId, setTodoId] = useState(1)
    const [todos, setTodos] = useState([])

    const createTodo = () => {
        const newTodo = { id: todoId, text: 'New Todo' }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setTodoId(todoId + 1)
    }

    const setTodo = (id, todoText) => {
        const prevTodos = todos.filter(item => item.id !== id)
        todoText !== null ? setTodos([...prevTodos, { id, text: todoText }]) : setTodos([...prevTodos])
    }

    return (
        <div>
            <h3 className="todo-title">Todos</h3>
            <div className="todo-list">
                {todos.sort((a, b) => a.id - b.id).map(item => <Todo key={item.id} todo={item} setTodo={setTodo}></Todo>)}
                <p className="create-todo">
                    {!todos.length && <span>There are no todos.</span>}
                    <button
                        className="create-todo-button"
                        onClick={createTodo}
                    >
                        Create a Todo
                    </button>
                </p>
            </div>
        </div>
    )
}

export default TodoList