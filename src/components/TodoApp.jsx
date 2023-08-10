import useTodo from "../Hooks/useTodo"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"



export default function TodoApp() {
    const {todos, handlerTodos, handlerDelete, handleDoubleClick} = useTodo()
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
