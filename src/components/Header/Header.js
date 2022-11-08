import React from 'react';
import anything from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={anything} alt="" />
            <div>
                <a href="#home">Home</a>
                <a href="/menu">Menu</a>
                <a href="#location">Location</a>
                <a href="#about">About Me</a>
            </div>
        </div>
    );
};

export default Header;