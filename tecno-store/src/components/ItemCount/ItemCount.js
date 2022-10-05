import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Link as LinkBoostrap} from 'react-router-dom';

export const ItemCount = ({initial, stock, onAdd }) => {

    const[count, setCount] = useState(initial);
    const[reseve, setReserve] = useState(stock);
    const [addProduct, setAddProduct] = useState(true);
    const {productId} = useParams();

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
        setAddProduct(false);
    }
    useEffect(()=>{
        setAddProduct(true);
    },[productId]);
    return (
        <>
            {addProduct ?
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
                
                <button disabled={count === 0} onClick={quantProd} className="btn btn-success m-1">Agregar al carrito</button>
                
            </div>
            </>
            :
            <LinkBoostrap to="/cart">
                <button className="btn btn-info m-1">Terminar Compra</button>
            </LinkBoostrap>
            }
        </>
    )
}