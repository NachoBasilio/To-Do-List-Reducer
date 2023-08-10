import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default function TodoList({todos, handlerDelete, handleDoubleClick}) {
  return (
    <ul className="list-group" > 
        {
            todos.map( todo => (
                <TodoItem key={todo.id} todo={todo} handlerDelete={handlerDelete} handleDoubleClick={handleDoubleClick}/>
            ))
        }
    </ul>
  )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handlerDelete: PropTypes.func.isRequired,
    handleDoubleClick: PropTypes.func.isRequired
}
