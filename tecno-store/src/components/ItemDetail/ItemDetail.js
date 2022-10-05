import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {
    const {addProduct} = useContext(CartContext);
    
    const onAdd = (quantProd, reseve) => {
        let newProduct = {...item}
        newProduct.quant = quantProd;
        addProduct(newProduct);                              
    }

    return(
        <>  
                <div key={item.id} className="card border-primary mb-3 cardDetailItem" >
                    <div className="card-header"><h3>{item.title}</h3></div>
                    <div className="card-body ">
                        <img src={item.pictureUrl} alt={item.title}></img>
                    </div>

                    <div className="card-body row">
                        <h5>Precio: {item.price}</h5>
                        <ItemCount initial={item.quant} stock={item.stock} onAdd={onAdd}/>
                    </div>
                </div>
        </>
    )
}
