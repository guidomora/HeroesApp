
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/pages/context/AuthContext';


export const Navbar = () => {

    const {user, logout } = useContext(AuthContext)


    const navigate = useNavigate()

    const onLogout = () => {
        logout();
        // primer argumento establece la ruta a la cual vamos a navegar, el segundo evita que la persona pueda
        // volver para atras en el historial (en este caso pq seria un login, nos sirve)
        navigate("/login", {replace: true})
        
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Home
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : null}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : null}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : null}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>{user?.name}</span>
                    <button className='nav-item nav-link btn' onClick={onLogout}>Logout</button>
                </ul>
            </div>
        </nav>
    )
}