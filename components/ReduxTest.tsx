import React, { useState } from "react"
import { useAppSelector, useAppDispatch } from "redux/hooks"
import { addTodo } from "redux/todoSlice"
import styles from "styles/reduxTest.module.css"

const InputElement = () => {
    const [inputValue, setInputValue] = useState("")

    // Nämä loimme hooks.ts-tiedostossa
    const todos = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()

    const addTodoEl = () => {
        if (inputValue) {
            dispatch(addTodo(inputValue))
        }
        setInputValue("")
    }
    console.log(todos.todos)
    return (
        <div className={styles.container}>
            <input type="text" onChange={(event) => setInputValue(event.target.value)} value={inputValue} placeholder="Try Redux by adding a todo"/>
            <button onClick={() => addTodoEl()}>Add todo</button>
            {todos.todos.map((todo, index) => {
                return <div key={index}>{todo.text}</div>
            })}
        </div>
    )
}

export default InputElement
