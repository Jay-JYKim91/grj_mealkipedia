import React from 'react';
import image from '../../assets/logo';

const Header = () => {
    console.log(React);
    
    return (
        <header className="p-6 shadow-md">
            <img src={image} alt="logo" />
        </header>
    )
}

export default Header;