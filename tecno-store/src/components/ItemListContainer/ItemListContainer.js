import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { arrProducts } from "../arrProducts/arrProducts";
export const ItemListContainer = ({title}) => {

    const [products, setProducts] = useState([]);

    const productsPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arrProducts);
        }, 2000);
    }); 

    useEffect(() => {
        productsPromise.then((res) => {
            console.log(res)
            setProducts(res)
        });
    }, []);


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