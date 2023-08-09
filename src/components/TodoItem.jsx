import PropTypes from 'prop-types';

export default function TodoItem({todo}) {
  return (
    <>
        <li  className="list-group-item d-flex justify-content-between">
            <span className="aling-self-center">{todo.desc}</span>
            <button className="btn btn-danger">
                Borrar
            </button>
        </li>
    </>
  )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}