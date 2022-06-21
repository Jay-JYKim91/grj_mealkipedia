import React from 'react';

const Footer = () => {
    console.log(React);
    
    return (
        <footer className="flex flex-col items-center justify-center px-12 py-4 bg-gray-400">
            <img src="/logo.png" alt="logo" width="100" />
            <p className="font-body2_font">Made by Juyeon Kim</p>
            <p>Using <a href="https://www.themealdb.com/">TheMealDB</a></p>
            
        </footer>
    )
};

export default Footer;