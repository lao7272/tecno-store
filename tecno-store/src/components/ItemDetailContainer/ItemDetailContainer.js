import { useEffect, useState } from "react";
import { arrProducts } from "../arrProducts/arrProducts"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const itemId = arrProducts.filter(itm => itm.id == productId);
                resolve(itemId[0]);
                setLoading(false);
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
        <>
        {loading ? <h3>Cargando</h3>
        :
        <div className="itemDetailContainer">
            <h4>Item Detail</h4>
            <ItemDetail item={item}/>
        </div>
    }
    </>
    )
}