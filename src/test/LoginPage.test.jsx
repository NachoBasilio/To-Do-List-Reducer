import UserContext from "../context/UserContext";
import LoginPage from "../pages/LoginPage";
import { fireEvent, render, screen } from "@testing-library/react"

describe('Pruebas en <LoginPage />', () => {
    test('Debe de mostrar el componente sin usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText("pre")
        expect(preTag.innerHTML).toBe("null")
    })

    test('Debe de llamar a setUser', () => {
        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({
            id: 123,
            name: 'AGJavaScriptero',
            email: "AGJavaScriptero@gmail.com"
        });
    })
})
