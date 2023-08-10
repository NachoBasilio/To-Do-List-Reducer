import PropTypes from 'prop-types';

export default function TodoAdd({handlerTodos}) {
    return (
        <form onSubmit={
            (e) => {
                e.preventDefault()
                if (e.target.description.value.trim().length <= 1) {
                    return
                }
                const newTodo = {
                    id: new Date().getTime(),
                    desc: e.target.description.value,
                    done: false
                }
                handlerTodos(newTodo)
                e.target.reset()
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
