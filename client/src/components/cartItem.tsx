import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

interface Props {id:string, device_type:string}

export const CartItem = (props: Props) => {
    const {id, device_type} = props;
    const [collectionMethod, setCollectionMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const handleSelectCollection = (e: React.FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        setCollectionMethod(target.value)
    }

    const handleSelectPayment = (e: React.FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        setPaymentMethod(target.value)
    }

    const handleOrderSubmit = () => {
        axios.post('/recipients/order/new', {collectionMethod, paymentMethod, deviceType: device_type})
        .then(({data}) => {
            console.log('ORDER', data)
            setOrderConfirmed(true);
        })
    }

    return (
        <div>
            <h1>device #{id} - {device_type}</h1>
            {!orderConfirmed && (
                 <form className="order">
                     <label htmlFor="collection">Choose a collection option to get this device:
                         <select id="collection" name="collection" onChange={handleSelectCollection}>
                             <option value="shipping">Shipping</option>
                             <option value="pickup">Pick-up at the refurbishing hub</option>
                         </select>
                     </label>
                     <label htmlFor="payment">Choose a payment method:
                         <select id="payment" name="payment" onChange={handleSelectPayment}>
                             <option value="credit-card">Credit card</option>
                             <option value="visa-number">Visa number for refugee</option>
                             <option value="voucher">Voucher id</option>
                         </select>
                     </label>
                     <button type="submit" onClick={handleOrderSubmit}>Confirm order</button>
                 </form>

            )}

            {orderConfirmed && <span> order confirmed ✔️ </span>}
           
        </div>

    )
}
