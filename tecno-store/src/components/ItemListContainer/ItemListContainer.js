import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../utils/firebase";
export const ItemListContainer = () => {

    const {tipoProducto} = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getData = async() => {
            const query = collection(dataBase, "items"); 
            const response = await getDocs(query);
            const docs = response.docs;
            const data = docs.map(doc=> {return {...doc.data(), id:doc.id}})

            if(!tipoProducto ){
                setProducts(data);
            } else {
                const newList = data.filter(itm => itm.category === tipoProducto);
                setProducts(newList);
            }
            
            setLoading(false);
        }
        getData();
    }, [tipoProducto]);

    


    return(
        <main>
            {
            loading ? <h3>Cargando</h3> 
            :
            <ItemList items={products}/>
            }
        </main>
    )
}