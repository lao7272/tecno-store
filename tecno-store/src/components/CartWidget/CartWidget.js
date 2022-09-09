import {Link as LinkBoostrap} from 'react-router-dom'
export const CartWidget = () => {
    return(
        <LinkBoostrap to="/cart">
            <div>
                <i className="fa-solid fa-cart-shopping fa-xl cartWidget" ></i>
            </div>
        </LinkBoostrap>
    )
}