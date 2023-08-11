import { MemoryRouter } from "react-router-dom";
import App from "../App";

import { render, screen } from "@testing-library/react"


describe('Pruebas en el <App/>', () => {
    test("debe mostrar el homepage", () => {
        render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
        )

        expect(screen.getByText("Home page")).toBeTruthy()


    })


    test("debe mostrar el Login page", () => {
        render(
        <MemoryRouter initialEntries={["/login"]}>
            <App/>
        </MemoryRouter>
        )

        expect(screen.getByText("Login Page")).toBeTruthy()


    })
});