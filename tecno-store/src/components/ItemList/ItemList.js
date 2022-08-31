import React from "react";
import { Item } from "../Item/Item";


export const ItemList = ({items}) => {
    
    return ( 
        <>
        <div>
            
            {items.map(product => {
                return(
                <Item key={product.id} item={product}/>
                )
            })}
        </div>
        </>
    )
}
