import { useEffect, useReducer } from "react"
import todoReducer from "../todoReducer"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
}

export default function TodoApp() {
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

  return (
    <>
        <h1>
            Todo App: 10 <small>pendientes: 2</small>
        </h1>
        <hr />
        
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} handleDoubleClick={handleDoubleClick} handlerDelete={handlerDelete} />
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd handlerTodos={handlerTodos} />
            </div>
        </div>

    </>
  )
}
