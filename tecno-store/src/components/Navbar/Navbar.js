import { CartWidget} from "../CartWidget/CartWidget"
export function Navbar (){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tecno Store</a>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Contacto</a>
                        </li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>

            </nav>
        </>
    )
}