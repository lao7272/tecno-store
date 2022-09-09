import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartContainer = () => {
    const {productCartList, removeProduct, clear} = useContext(CartContext);

    
    return (
        <div>
            <h1>Productos en carrito</h1>
            <div className='cartProducts'>
                {
                    productCartList.map(item => (
                    <>
                        <div key={item.id} className="card border-primary mb-3 m-3 cardItem" >
                            <div className="card-header"><h3>{item.title}</h3></div>
                            <div className="card-body ">
                                <img src={item.pictureUrl} alt={item.title}></img>
                            </div>

                            <div className="card-body row">
                                <h5>Precio: {item.price}</h5>
                                <h5>Cantidad: {item.quant}</h5>
                            </div>
                            <div className='deleteProduct'>
                            <button onClick={()=>removeProduct(item.id)} className='btn btn-danger w-50'>Quitar del carrito</button>
                            </div>
                        </div>
                        
                    </>
                    ))
                }
            </div>
            <div>
                <button onClick={clear} className='btn btn-danger'>
                    Quitar todos los productos del carrito
                </button>
            </div>
        </div>
    )
}
