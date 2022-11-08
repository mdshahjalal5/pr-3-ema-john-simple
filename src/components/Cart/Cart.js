import React from 'react';

const Cart = ({cart}) => {
    let quantity = 0; 
    let priceTotal = 0; 
    let shippingTotal  = 0; 
    cart.forEach(product =>{
        priceTotal = priceTotal + product.price * product.quantity;
        shippingTotal += product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    })
    return (
        <div>
               <h2>Oreder Summary</h2>
                <p>Quantity:{quantity} </p>
                <p>Total: {priceTotal} </p>
                <p>Shipping:{shippingTotal} </p>
        </div>
    );
};

export default Cart;