import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TodoApp from './pages/TodoApp'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'
import UserPorvider from './context/UserPorvider'


export default function App() {
  return (
    <UserPorvider>

        <NavBar />
        <hr />

        <Routes>
            <Route path='/' element={ <HomePage/>}></Route>
            <Route path='/about' element={ <AboutPage/>}></Route>
            <Route path='/todo' element={ <TodoApp/>}></Route>
            <Route path='/login' element={ <LoginPage/>}></Route>
            <Route path='*' element={ <Navigate to="/about"/>}></Route>
        </Routes>
    </UserPorvider>
  )
}
