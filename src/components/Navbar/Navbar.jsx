import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-navbar">
                <Link to="/"><img src="/Placeholders/Logo.svg" alt="" /></Link>
                <ul className="nav-links">
                    <li><NavLink to="/">PRODUCTS</NavLink></li>
                    <li><NavLink to="/add">ADD</NavLink></li>
                    <img className='icon-sm' src="/Placeholders/search.svg" alt="" />
                    <li><NavLink to="/login"><span>Login</span></NavLink></li>
             
                </ul>
            </div>
        </nav>
    )
}

export default Navbar