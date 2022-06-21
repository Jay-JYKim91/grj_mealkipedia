import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }
    
    return (
        <header className="px-6 py-2 shadow-md bg-gray-50">
            <img src='/logo.png' alt="logo" width="160" 
                onClick={navigateHome} />
        </header>
    )
}

export default Header;