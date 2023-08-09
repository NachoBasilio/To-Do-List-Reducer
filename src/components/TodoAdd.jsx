import PropTypes from 'prop-types';

export default function TodoAdd({handlerTodos}) {
    return (
        <form onSubmit={
            (e) => {
                e.preventDefault()
                const newTodo = {
                    id: new Date().getTime(),
                    desc: 'Aprender React',
                    done: false
                }
                handlerTodos(newTodo)
            }
        }>
            <input
                type="text"
                name="description"
                placeholder="Aprender..."
                autoComplete="off"
                className="form-control"

            />
            <button
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Agregar
            </button>
        </form>
  )
}

TodoAdd.propTypes = {
    handlerTodos: PropTypes.func.isRequired
}
