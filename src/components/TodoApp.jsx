import { useReducer } from "react"
import todoReducer from "../todoReducer"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
},
{
    id: new Date().getTime() + 1,
    desc: 'Aprender Mongo',
    done: false
}]


export default function TodoApp() {
    const [todos, dispatch] = useReducer(todoReducer, initialState)
    const handlerTodos = (todo) => {
        console.log(todo)
    }

  return (
    <>
        <h1>
            Todo App: 10 <small>pendientes: 2</small>
        </h1>
        <hr />
        
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} />
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
