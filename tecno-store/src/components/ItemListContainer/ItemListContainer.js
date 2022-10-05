import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../utils/firebase";
import loadingGif from "../../assets/gif/loading.gif";
export const ItemListContainer = () => {

    const {tipoProducto} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getData = async() => {
            const queryRef = collection(dataBase, "items"); 
            const response = await getDocs(queryRef);
            const docs = response.docs;
            const data = docs.map(doc=> {return {...doc.data(), id:doc.id}});

            if(!tipoProducto ){
                setProducts(data);
            } else {
                const newQ = query(collection(dataBase, "items"), where("category", "==", tipoProducto));
                const newRes = await getDocs(newQ);
                const newDocs = newRes.docs;
                const newData = newDocs.map(doc=> {return {...doc.data(), id:doc.id}});
                setProducts(newData);
            }
            
            setLoading(false);
        }
        getData();
    }, [tipoProducto]);

    


    return(
        <main>
            {
            loading ? <img src={loadingGif} alt="Cif Caragndo" className="loadingGif"/> 
            :
            <ItemList items={products}/>
            }
        </main>
    )
}