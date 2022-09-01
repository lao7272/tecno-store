import React, {useState} from "react"
export const ItemCount = ({stock, initial }) => {
    const[count, setCount] = useState(0);
    const[reseve, setReserve] = useState(stock)
    const addToCart = () => {
        if (count < stock){
            setCount(count + 1);
            setReserve(reseve - 1)
            initial = count;
            stock = reseve ;

        }

        
    }
    const removeFromCart = () => {
        if(count !== 0){

            setCount(count - 1);
            setReserve(reseve + 1)
            initial = count;
            stock = reseve;
        }
        
    }
    console.log(count)
    return (
        <>
            <div>
                <p>Stock {reseve}</p>
                <div>
                    <p>Cant: {count}</p>
                    <button className="btn btn-outline-primary" onClick={removeFromCart}>-</button>
                    <button className="btn btn-outline-primary" onClick={addToCart}>+</button>
                </div>
            </div>
            <div>
                <button className="btn btn-success">Agregar al carrito</button>
            </div>
        </>
    )
}