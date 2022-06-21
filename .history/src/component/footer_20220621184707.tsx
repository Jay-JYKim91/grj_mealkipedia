import React from 'react';

const Footer: React.FC = () => {
    // console.log(React);
    
    return (
        <footer className="flex flex-col items-center justify-center px-12 py-4 bg-gray-400">
            <img src="/logo.png" alt="logo" width="100" className="mb-2"/>
            <p className="font-body2_font">Developed by Juyeon Kim</p>
            <p>Using <a href="https://www.themealdb.com/">TheMealDB</a></p>
            
        </footer>
    )
};

export default Footer;