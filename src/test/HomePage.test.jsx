import UserContext from "../context/UserContext";
import HomePage from "../pages/HomePage";
import { render, screen } from "@testing-library/react"



describe('Pruebas en <HomePage />', () => {
    const user = {
        name: 'Juan',
        email: 'asda@gmail.com',
        id: 1
    }
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage />
            </UserContext.Provider>
        )
         
        const preTag = screen.getByLabelText("pre")
        expect(preTag.innerHTML).toBe("null")

    })
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user:user}}>
                <HomePage />
            </UserContext.Provider>
        )
         
        const preTag = screen.getByLabelText("pre")
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3))

    })
})