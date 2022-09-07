import React, { useState} from "react"
export const ItemCount = ({initial, stock, onAdd }) => {

    const[count, setCount] = useState(initial);
    const[reseve, setReserve] = useState(stock);
    const addToCart = () => {
        if (count < stock){
            setCount(count + 1);
            setReserve(reseve - 1);
            initial = count;
            stock = reseve ;

        }

        
    }
    const removeFromCart = () => {
        if(count !== 0){

            setCount(count - 1);
            setReserve(reseve + 1);
            initial = count;
            stock = reseve;
        }
        
    }

    const quantProd = () => {
        onAdd(count, reseve);
        console.log(stock, initial);
        console.log(reseve, count)
    }
    return (
        <>
            <div>
                <p>Stock: {reseve}</p>
                <div>
                    <p>Cant: {count}</p>
                    <button className="btn btn-outline-primary m-2" onClick={removeFromCart}>-</button>
                    <button className="btn btn-outline-primary m-2" onClick={addToCart}>+</button>
                </div>
            </div>
            <div>
                <button onClick={quantProd} className="btn btn-success m-1">Agregar al carrito</button>
            </div>
        </>
    )
}