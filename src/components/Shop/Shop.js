import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'
import {addToDb} from '../../utilities/fakedb'
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    
    const datas = async() =>{
        const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
        const data = await res.json();
        setProducts(data);
        
    }
    useEffect(() =>{
        datas();
        
    },[])

    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (selectedProduct) =>{
        // console.log(selectedProduct);
        const exists = cart.find(product => product.id === selectedProduct.id)
        let newCart = [];
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product =>product.id !== selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, selectedProduct];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }


    return (
        <div className='shop'>
            <div className='products'>
                {products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)}
            </div>
            <div className='cart'>
              <Cart cart={cart}></Cart>
            </div>    
        </div>
    );
};

export default Shop;