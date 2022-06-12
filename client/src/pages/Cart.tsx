import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';



function Cart() {


    return (
        <div>
            <h1>device #{id} - {device_type}</h1>

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
        </div>
    );
}

export default Cart;