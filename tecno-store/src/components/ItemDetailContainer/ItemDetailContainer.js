import { useEffect, useState } from "react";
import { arrProducts } from "../arrProducts/arrProducts"
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrProducts[0]);
            }, 2000);
        });
    }
    useEffect(() => {
        const response = async () =>{
            const res = await getItem();
            setItem(res)
            console.log('detailCont', res);
        }
        response();
    },[])
    return(
        <div className="itemDetailContainer">
            <h4>Item Detail</h4>
            <ItemDetail item={item}/>
        </div>
    )
}