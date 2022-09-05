import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { arrProducts } from "../arrProducts/arrProducts";
import { useParams } from "react-router-dom";
export const ItemListContainer = ({title}) => {

    const {tipoProducto, productId} = useParams();

    const [products, setProducts] = useState([]);

    const productsPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrProducts);
        }, 2000);
    }); 

    useEffect(() => {
        productsPromise.then((res) => {
            if(!tipoProducto ){
                setProducts(res);
            } else {
                const newList = res.filter(itm => itm.category === tipoProducto);
    
                setProducts(newList);
            }
        });
    }, [tipoProducto]);

    useEffect(() => {
        productsPromise.then((res) => {
            if(!productId ){
                setProducts(res);
            } else {
                const newList = res.filter(itm => parseFloat(itm.id) === parseFloat(productId));
    
                setProducts(newList);
            }
        });
    }, [productId]);


    return(
        <main>
            <div className="itemCount">
                <h1>{title}</h1>
                <ItemCount stock={7} initial={1}/>
            </div>
            <div className="itemList">
                <ItemList items={products}/>
            </div>
        </main>
    )
}