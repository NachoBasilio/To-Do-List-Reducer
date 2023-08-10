import { useEffect, useReducer } from "react"
import todoReducer from "../todoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
}

export default function useTodo() {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos) )
    }, [todos])

    const handlerTodos = (todo) => {
        const action = {
            type: "add Todo",
            payload: todo
        }

        dispatch(action)
    }

    const handlerDelete = (todoId) => {
        const action = {
            type: "delete Todo",
            payload: todoId
        }

        dispatch(action)
    }

    const handleDoubleClick = (todoId) => {
        const action = {
            type: "toggle Todo",
            payload: todoId
        }

        dispatch(action)
    }

    return {
        todos,
        handlerTodos,
        handlerDelete,
        handleDoubleClick
    }
}
