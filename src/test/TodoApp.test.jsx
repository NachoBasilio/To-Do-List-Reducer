import useTodo from "../hooks/useTodo";
import TodoApp from "../pages/TodoApp";
import { render, screen } from "@testing-library/react"

jest.mock('../hooks/useTodo')


describe('Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                desc: 'Aprender React',
                done: false
            },
            {
                id: 2,
                desc: 'Aprender Mongo',
                done: true
            }],
        allTodos: 2,
        pendingTodos: 1,
        handlerTodos: jest.fn(),
        handlerDelete: jest.fn(),
        handleDoubleClick: jest.fn()
    })

    test('Debe de mostrarse correctamente', () => {
        render(<TodoApp />)

        expect(screen.getByText('Aprender React')).toBeTruthy()
        expect(screen.getByText('Aprender Mongo')).toBeTruthy()
        
        expect(screen.getByRole("textbox")).toBeTruthy()

    })
})