import React from 'react';
import './Product.css'
const Product = ({product,  handleAddToCart}) => {
    // console.log(handleAddToCart)
    const {id, img, name, price, quantity, ratings,  shipping, stock} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: <b>{price} </b></p>
            <p>ID: <b>{id} </b> </p>
            <p>Quantity: <b>{quantity} </b> </p>
            <p>Ratings starts: <b>{ratings} </b></p>
            <p>Shipping: <b>{shipping} </b></p>
            <p>Stock: <b>{stock} </b> </p>
            <div className="btn">
                <button onClick={() =>{
                    handleAddToCart(product)
                }}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;