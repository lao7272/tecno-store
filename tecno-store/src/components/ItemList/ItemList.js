import React from "react";
import { Item } from "../Item/Item";
import { Link as LinkBoostrap } from "react-router-dom";


export const ItemList = ({items}) => {
    
    return ( 
        <>
        <div>
            
            {items.map(product => {
                return(
                    <>
                        <LinkBoostrap key={product.id} to={`/item/${product.id}`}>
                            <Item item={product}/>
                        </LinkBoostrap>
                    </>
                )
            })}
        </div>
        </>
    )
}
