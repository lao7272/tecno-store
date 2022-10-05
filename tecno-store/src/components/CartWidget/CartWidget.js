import { useContext, useState, useEffect } from 'react';
import {Link as LinkBoostrap} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const [counterBoolean, setCounterBoolean] = useState(true);
    const [counterItems, setCounterItems] = useState(0)
    const { productCartList } = useContext(CartContext);

    const totalItems = (arr) => {
        let acum = arr.reduce((acum, item) => {
            return acum += item.quant;
        }, 0);
        
        return acum
    }
    useEffect(()=>{
        if(productCartList.length !== 0){  
            setCounterItems(totalItems(productCartList));       
            setCounterBoolean(false);
        } else {
            setCounterBoolean(true);
        }
    },[productCartList]);
    return(
        <LinkBoostrap to="/cart">
            <div className='cartWidget'>
                <p className={counterBoolean ? 'counterCartDisabled' : 'counterCart'}>{counterItems}</p>
                <i className="fa-solid fa-cart-shopping fa-xl cartWidget" ></i>
            </div>
        </LinkBoostrap>
    )
}