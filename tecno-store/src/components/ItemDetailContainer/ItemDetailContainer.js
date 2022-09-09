import { useEffect, useState } from "react";
import { arrProducts } from "../arrProducts/arrProducts"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const {productId} = useParams();
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const itemId = arrProducts.filter(itm => itm.id == productId);

                resolve(itemId[0]);
            }, 2000);
        });
    }
    useEffect(() => {
        const response = async () =>{
            const res = await getItem();
            setItem(res);
        }
        response();
    },[productId]);

    return(
        <div className="itemDetailContainer">
            <h4>Item Detail</h4>
            <ItemDetail item={item}/>
        </div>
    )
}