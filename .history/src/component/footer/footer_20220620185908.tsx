import React from 'react';

const Footer = () => {
    console.log(React);
    
    return (
        <footer className="flex-col items-center px-12 py-4 bg-gray-400">
            <img src="/logo.png" alt="logo"/>
            <p>Made by Juyeon Kim. Using TheMealDB.</p>
        </footer>
    )
};

export default Footer;