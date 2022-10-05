import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FormCartContainer } from '../FormCartContainer/FormCartContainer';
import emptyCartIcon from '../../assets/icons/empty-cart.png';


export const CartContainer = () => {
    const {productCartList, removeProduct, clear, total } = useContext(CartContext);
    const [ifEmptyCart, setIfEmptyCart] = useState(true);

    
    useEffect(()=>{
        if(productCartList.length !== 0){
            setIfEmptyCart(false);
        } else {
            setIfEmptyCart(true);
        }
    },[productCartList]);
    
    return (
        
        <div>
            <h1 className='cartTitle'>Carrito</h1>
            {
                
                    ifEmptyCart ? 
                    <div className='emptyCart'>
                        <img src={emptyCartIcon} alt='Carro Vacio' className='emptyCartIcon'/>
                        <h2>Tu carro esta vacio</h2>
                        
                        <Link to='/'><button className='btn btn-dark'>Ver productos</button> </Link>
                        
                    </div>
                    :
            <>
            <div className='cartProducts'>
                {
                    productCartList.map(item => (
                
                        <div key={item.id} className=" mb-3 cartItem" >
                            <div className="cartCardHeader"><h4>{item.title}</h4></div>
                            <div className="cartCardBody">
                                <div className='cartCardInfo'>

                                    <h5>Precio: ${item.price}</h5>
                                    <h5>Cantidad: {item.quant}</h5>
                                </div>
                                <img src={item.pictureUrl} alt={item.title}></img>
                            </div>
                            <div className='deleteProduct'>
                                <button onClick={()=>removeProduct(item.id)} className='btn btn-danger '>Quitar del carrito</button>
                            </div>
                        </div>
                        
                    
                ))}
            </div>
            <h3>Total: {total(productCartList)}</h3>
            <FormCartContainer arr={productCartList} total={total(productCartList) } />
            <div>
                <button onClick={clear} className='btn btn-danger'>
                    Quitar todos los productos del carrito
                </button>
            </div>
            </> 
            }
            
            
        </div>

    )
}
