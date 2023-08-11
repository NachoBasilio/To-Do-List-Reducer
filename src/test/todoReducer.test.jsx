import todoReducer from "../todoReducer";


describe('Pruebas en el todoReducer', () => {
    const initialState = [
        {
            id: 1,
            desc: "Aprender React",
            done: false
        }
    ]
    
  test('Debe regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('Debe agregar un TODO', () => {
    const action = {
        type: 'add Todo',
        payload: {
            id: 2,
            desc: "Aprender Node",
            done: false
        }
    }
    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toEqual([...initialState, action.payload])
  })

  test('Debe borrar un TODO', () => {
    const action = {
        type: 'delete Todo',
        payload: 1
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(0)

  })

  test('Debe hacer el TOGGLE del TODO', () => {
    const action = {
        type: "toggle Todo",
        payload: 1
    }
    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBe(true)

    const newState2 = todoReducer(newState, action)
    expect(newState2[0].done).toBe(false)
  })
});
