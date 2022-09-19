import React, { useState } from 'react';
import { dataBase } from '../../utils/firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

export const FormCartContainer = ({arr, total}) => {
    const [idOrder, setIdOrder] = useState("");
    const sendData = (e) => {
        e.preventDefault();
        
        const order = {
            buyer:{
                name: e.target[0].value, 
                phone: e.target[1].value,
                email: e.target[2].value,
                
            },
            items: arr,
            total: total,
            date: serverTimestamp()
        }
        //Creo referencia en la base de datos
        const queryRef = collection(dataBase, "orders");
        addDoc(queryRef, order).then(res => setIdOrder(res.id));
        document.getElementById('formCart').reset();
        console.log(order);
    }
    return (
        <>
            <form id='formCart' onSubmit={sendData}>
                <div className="mb-3">
                    <label for="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder='Nombre'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email'/>
                </div>
                <div className="mb-3 ">
                    <label className="form-label" for="number">Numero de telefono</label>
                    <input type="text" className="form-control" id="number" placeholder='Numero'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </>
    )
}
