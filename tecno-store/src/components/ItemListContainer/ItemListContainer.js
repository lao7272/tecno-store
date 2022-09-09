import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { arrProducts } from "../arrProducts/arrProducts";
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {

    const {tipoProducto} = useParams();

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

    


    return(
        <main>
            <ItemList items={products}/>
        </main>
    )
}