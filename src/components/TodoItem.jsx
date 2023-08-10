import PropTypes from 'prop-types';

export default function TodoItem({todo, handlerDelete, handleDoubleClick}) {

  return (
    <>
        <li  className="list-group-item d-flex justify-content-between ">
            <span 
            
            className={`align-self-center ${
                todo.done && 'text-decoration-line-through'
            }`}
            onDoubleClick={
                () => handleDoubleClick(todo.id)
            }
            >
                {todo.desc}
            </span>
            <button className="btn btn-danger" onClick={
                () => handlerDelete(todo.id)
            }>
                Borrar
            </button>
        </li>
    </>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handlerDelete: PropTypes.func.isRequired,
    handleDoubleClick: PropTypes.func.isRequired
}