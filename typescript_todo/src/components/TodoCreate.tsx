import React, { useState } from 'react'
import '../css/TodoCreate.css'
import { useDispatch } from 'react-redux'
import { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setnewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo giriniz");
            return;
        }


        const payload: TodoType = {
            id: Math.floor(Math.random() * 99999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setnewTodo('')
    }


    return (
        <div className='input'>
            <input type='text ' className='input-box' placeholder='TODO Giriniz'
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setnewTodo(e.target.value)} />
            <button onClick={handleCreateTodo} className='create-btn'>Oluştur</button>
        </div>
    )
}

export default TodoCreate
