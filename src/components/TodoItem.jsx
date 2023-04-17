import { useState } from 'react'

import styles from '@/style/TodoItem.module.scss'
import Modal from '@/components/Modal'

function TodoItem({ todoItem, deleteTodo }) {
    const [todo, setTodo] = useState(todoItem)
    const [editing, setEditing] = useState(false)

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = 'none'
    } else {
        editMode.display = 'none'
    }

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateSubmit = (value) => {
        setTodo({
            ...todo,
            title: value,
        })
        setEditing(false)
    }

    const handleChange = () => {
        setTodo({
            ...todo,
            completed: !todo.completed,
        })
    }

    return (
        <li>
            <div className={styles.item}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleChange}
                />
                <span
                    style={todo.completed ? { textDecoration: 'line-through' } : null}
                >
                    {todo.title}
                </span>
                <button onClick={handleEditing}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>

            {editing && (
                <Modal defaultVal={todo.title} handleUpdate={handleUpdateSubmit} />
            )}
        </li>
    )
}

export default TodoItem