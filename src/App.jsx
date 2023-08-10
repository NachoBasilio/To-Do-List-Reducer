import { Routes, Route, Navigate, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TodoApp from './pages/TodoApp'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <div>
        <h1>App</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/about">About</Link>
            <Link className="navbar-brand" to="/todo">Todo</Link>
            <Link className="navbar-brand" to="/login">Login</Link>
        </nav>

        <hr />

        <Routes>
            <Route path='/' element={ <HomePage/>}></Route>
            <Route path='/about' element={ <AboutPage/>}></Route>
            <Route path='/todo' element={ <TodoApp/>}></Route>
            <Route path='/login' element={ <LoginPage/>}></Route>
            <Route path='*' element={ <Navigate to="/about"/>}></Route>
        </Routes>
    </div>
  )
}
