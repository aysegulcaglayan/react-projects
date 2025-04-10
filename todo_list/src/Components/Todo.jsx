import React, { use, useState } from 'react'
import { FaMinusCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../css/todo.css'
function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const removeTodo = () => {
        onRemoveTodo(id)
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo


        }
        onUpdateTodo(request)
        setEditable(false)
    }
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content)
    return (
        <>
            <div className="todo-content">


                <div className='todo-text'>
                    {
                        editable ? <input placeholder='Todo Giriniz' className='todo-input' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                        />
                            : content
                    }
                </div>
                <div className="icon">
                    <FaMinusCircle className='todo-icons' onClick={removeTodo} />
                    {
                        editable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <FaEdit className='todo-icons' onClick={() => setEditable
                            (true)} />
                    }

                </div>
            </div>
        </>
    )
}

export default Todo
