import { CartWidget} from "../CartWidget/CartWidget";
import {Link as LinkBoostrap, NavLink} from 'react-router-dom';
export function Navbar (){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                        <LinkBoostrap to="/" className="navbar-brand">Tecno Store</LinkBoostrap>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive}) => isActive ? "activeClass nav-link active" : "inactiveClass nav-link active"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos/celulares" className={({isActive}) => isActive ? "activeClass nav-link active" : "inactiveClass nav-link active"}>Celulares</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/productos/computadoras" className={({isActive}) => isActive ? "activeClass nav-link active" : "inactiveClass nav-link active"}>Computadoras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto" className={({isActive}) => isActive ? "activeClass nav-link active" : "inactiveClass nav-link active"}>Contacto</NavLink>
                        </li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>

            </nav>
        </>
    )
}