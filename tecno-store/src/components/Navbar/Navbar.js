import { CartWidget} from "../CartWidget/CartWidget"
export function Navbar (){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tecno Store</a>
                    <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Productos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Contacto</a>
                        </li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>

            </nav>
        </>
    )
}