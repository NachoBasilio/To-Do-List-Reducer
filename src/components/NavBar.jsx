import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3">
        <NavLink to="/" className="navbar-brand" >Use Context</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <NavLink to="/" className={({isActive})=>{
                    return `nav-link ${isActive ? 'active' : ''}`
                }}>Home <span className="sr-only">{}</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="login" className={({isActive})=>{
                    return `nav-link ${isActive ? 'active' : ''}`
                }}>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="todo" className={({isActive})=>{
                    return `nav-link ${isActive ? 'active' : ''}`
                }}>To-Do</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink to="/about" className={({isActive})=>{
                    return `nav-link ${isActive ? 'active' : ''}`
                }}>About <span className="sr-only">{}</span></NavLink>
            </li>
            </ul>
    </div>
</nav>
  )
}
