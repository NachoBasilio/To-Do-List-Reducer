import { render, screen } from "@testing-library/react"
import TodoItem from "../components/TodoItem"

describe("Pruebas en el TodoItem", () => {
    const todo = {
        id: 1,
        desc: "Aprender React",
        done: false
    }

    const handleDelete = jest.fn()
    const handleDoubleClick = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

   test("Debe mostrar el todo pendiente de completar", () => {
        render(<TodoItem 
            todo={todo} 
            handlerDelete={handleDelete} 
            handleDoubleClick={handleDoubleClick} 
        />)
        
        const liElement = screen.getByRole("listitem");
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between ")

        const spanElement = screen.getByLabelText("span")
        expect(spanElement.className).toContain("align-self-center")
        expect(spanElement.className).not.toContain("text-decoration-line-through")

   })

   test("Debe mostrar el todo compledos", () => {
    todo.done = true

    render(<TodoItem 
        todo={todo} 
        handlerDelete={handleDelete} 
        handleDoubleClick={handleDoubleClick} 
    />)
    
  

    const spanElement = screen.getByLabelText("span")
    expect(spanElement.className).toContain("text-decoration-line-through")

    })

    test("Debe llamar la funcion handleDelete", () => {
        render(<TodoItem 
            todo={todo} 
            handlerDelete={handleDelete} 
            handleDoubleClick={handleDoubleClick} 
        />)
        
        const buttonElement = screen.getByRole("button")
        buttonElement.click()
        expect(handleDelete).toHaveBeenCalledWith(todo.id)
    }
    )
})