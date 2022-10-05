import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../utils/firebase";
import loadingGif from "../../assets/gif/loading.gif";


export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();
    
    useEffect(() => {
        const getItem = async () => {
            const query = doc(dataBase, "items", productId); 
            const response = await getDoc(query);
            const product = {
                ...response.data(),
                id: response.id
            }
            setItem(product);
            setLoading(false);
        }
        getItem();
    },[productId]);

    return(
        <>
        {loading ? <img src={loadingGif} alt="Cif Caragndo" className="loadingGif"/> 
        :
        <div className="itemDetailContainer">
            <h4>Item Detail</h4>
            <ItemDetail item={item}/>
        </div>
    }
    </>
    )
}