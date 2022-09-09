import { createContext, useState } from "react";
import { arrProducts } from "../components/arrProducts/arrProducts";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [productCartList, setProductCartList] = useState([]);
    const addProduct = (product, quantProd, id) => {

        const newProduct = productCartList.find(p => p.id === product.id);

        if(newProduct){
            newProduct.quant = product.quant;
        } else {
            const newList = [...productCartList, product];
            setProductCartList(newList);
        }
    }
    const removeProduct = (productId) => {
        const products = [...productCartList]
        const newList = products.filter(itm=>itm.id !== productId);
        setProductCartList(newList);
    }
    const clear = () => {
        setProductCartList([]);
    }
    return(
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, clear}}>
            {/* Components */}
            {children}
        </CartContext.Provider>
    )
}