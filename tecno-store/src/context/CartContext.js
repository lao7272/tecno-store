import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [productCartList, setProductCartList] = useState([]);
    const addProduct = (product, quantProd, id) => {
        const newProduct = productCartList.find(p => p.id === product.id);
        if(newProduct){
            newProduct.quant = newProduct.quant + product.quant;
        } else {
            const newList = [...productCartList, product];
            setProductCartList(newList);
        }
    }
    
    const removeProduct = (productId) => {
        const products = [...productCartList];
        const newList = products.filter(itm=>itm.id !== productId);
        setProductCartList(newList);
    }
    const clear = () => {
        setProductCartList([]);
    }

    const total = (arr) => {
        let acum = arr.reduce((acum, item) => {
            return acum += (item.price * item.quant);
        }, 0);
        
        return acum
    }
    return(
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, clear, total}}>
            {/* Components */}
            {children}
        </CartContext.Provider>
    )
}