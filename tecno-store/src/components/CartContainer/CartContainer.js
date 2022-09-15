import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartContainer = () => {
    const {productCartList, removeProduct, clear, total, } = useContext(CartContext);
    const [ifEmptyCart, setIfEmptyCart] = useState(true);

    
    useEffect(()=>{
        if(productCartList.length !== 0){
            setIfEmptyCart(false);
        } else {
            setIfEmptyCart(true);
        }
        console.log(total(productCartList))
    },[productCartList]);
    
    
    return (
        
        <div>
            <h1>Carrito</h1>
            {
                
                    ifEmptyCart ? 
                    <div>
                        <h3>Tu carrito esta vacio</h3>
                        <h5>Nuestros productos: </h5>
                        
                    </div>
                    :
            <>
            <div className='cartProducts'>
                {
                    productCartList.map(item => (
                
                        <div key={item.id} className="card border-primary mb-3 m-3 cardItem" >
                            <div className="card-header"><h3>{item.title}</h3></div>
                            <div className="card-body ">
                                <img src={item.pictureUrl} alt={item.title}></img>
                            </div>

                            <div className="card-body row">
                                <h5>Precio: ${item.price}</h5>
                                <h5>Cantidad: {item.quant}</h5>
                            </div>
                            <div className='deleteProduct'>
                            <button onClick={()=>removeProduct(item.id)} className='btn btn-danger w-50'>Quitar del carrito</button>
                            </div>
                        </div>
                        
            
                    
                ))}
            </div>
            <div>
                <button onClick={clear} className='btn btn-danger'>
                    Quitar todos los productos del carrito
                </button>
            </div>
            <h3>Total: {total(productCartList)}</h3>
            </> 
            }
        </div>

    )
}
