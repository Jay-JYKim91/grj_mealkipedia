import React from 'react';
// import image from '../../assets/logo.png'

const Header = () => {
    console.log(React);
    
    return (
        <header className="p-6">
            <img src="../../src/assets/logo.png" alt="logo" />
            {/* <img src="../assets/logo.png" alt="logo" /> */}
        </header>
    )
}

export default Header;