import React, { useContext, useEffect, useState } from 'react';
import { dataBase } from '../../utils/firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

export const FormCartContainer = ({arr, total}) => {
    const [idOrder, setIdOrder] = useState('');
    const {clear} = useContext(CartContext);

    const showAlert = () => {
        if (idOrder){
            Swal.fire({
                title: `<strong>Gracias por tu compra!</strong>`,
                html: `<i>Tu orden ${idOrder} esta en camino</i>`,
                icon: 'success'
            })
        }
    }
    
    const sendData = (e) => {
        e.preventDefault();
        
        const order = {
            buyer:{
                name: e.target[0].value, 
                email: e.target[1].value,
                phone: e.target[2].value,
                creditCard: e.target[3].value
            },
            items: arr,
            total: total,
            date: serverTimestamp(),
        }
        //Creo referencia en la base de datos

        const getOrderData = async() => {
            const queryRef = collection(dataBase, "orders");
            const addOrder = await addDoc(queryRef, order);
            const getIdOrder = addOrder.id;
            setIdOrder(getIdOrder);
            document.getElementById('formCart').reset();
            clear();
        }
        
        getOrderData();
    }
    
    useEffect(() => {
        showAlert()
    }, [idOrder]);
    
    
    return (
        <>
            <form id='formCart' className='formCart' onSubmit={sendData}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="name" placeholder='Nombre'/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder='Email'/>
                </div>
                <div className="mb-3 ">
                    <input  type="text" className="form-control" id="phone" placeholder='Numero de telefono'/>
                </div>
                <div className="mb-3 ">
                    <input  type="text" className="form-control" id="creditCart"
                    placeholder='Tarjeta de credito'/>
                </div>
                <button              
                type="submit" className="btn btn-primary m-3">Submit</button>
                
            </form>           
        </>
    )
}
// disabled={!(useForm.buyer.name && useForm.buyer.email && useForm.buyer.phone && useForm.buyer.creditCard)}