import React from 'react';

const Header = () => {
    console.log(React);
    
    return (
        <header className="px-12 py-4 shadow-md bg-gray-50">
            <img src='/logo.png' alt="logo" width="160" />
        </header>
    )
}

export default Header;