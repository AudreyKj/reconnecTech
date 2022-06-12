import React from 'react';
import { CartItem } from './components/CartItem';
import { Link } from "react-router-dom";
import '../App.css';



function Cart() {

    const cartItems = JSON.parse(localStorage.getItem('cartItems') as string);
    const isUserLoggedIn = localStorage.getItem('user');

    return (
        <section className="cart">
            {!isUserLoggedIn && (
                <span className="tip">You have item(s) in your cart but you must have an account to order.<br /><Link to="/login">Please log in here.</Link> </span>
            )}
            {isUserLoggedIn && cartItems && cartItems.length > 0 && cartItems.map((item: { device_type: string, id: string }) => {
                return(<CartItem id={item.id} key={item.id} device_type={item.device_type} />)
            })}
            {isUserLoggedIn && !cartItems && (
                <span className="tip">You don't have any item(s) in your cart: the devices you select will be listed here.</span>
            )}
        </section>
    );
}

export default Cart;