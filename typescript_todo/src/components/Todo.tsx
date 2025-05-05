import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
import { FaCheck } from "react-icons/fa";
interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps
    const Icon_IoMdRemoveCircleOutline = IoMdRemoveCircleOutline as unknown as React.FC;
    const Icon_CiEdit = CiEdit as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
    const Icon_FaCheck = FaCheck as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
    const [editable, setEditable] = useState<boolean>(false);
    const dispatch = useDispatch();
    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false)
    }
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }
    const [newTodo, setNewTodo] = useState<string>(content);
    return (
        <div className='todo'>
            <div>
                {editable ? <input type='text' style={{ width: '400px', border: 'none', borderBottom: '1px solid lightgrey' }} value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div> {content}</div>}

            </div>
            <div className='icons'>
                {editable ? <span
                    onClick={handleUpdateTodo}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: "pointer" }}
                >
                    < Icon_FaCheck />
                </span>
                    :
                    <span
                        onClick={() => setEditable(true)}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                    >
                        <Icon_CiEdit />
                    </span>}


                <span
                    onClick={handleRemoveTodo}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: "pointer" }}
                >
                    <Icon_IoMdRemoveCircleOutline />
                </span>


            </div>
        </div>

    )
}

export default Todo
