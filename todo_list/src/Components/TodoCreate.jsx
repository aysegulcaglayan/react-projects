import React, { useState } from 'react'
import '../css/todo.css'

function TodoCreate({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState('');
    const clearInput = () => { setNewTodo('') }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();

    }

    return (
        <div className='todo-div'>
            <input placeholder='Todo Giriniz' className='todo-input'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}>
            </input>
            <button className='todo-button' onClick={createTodo}> Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate
