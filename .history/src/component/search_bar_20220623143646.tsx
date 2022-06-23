import React from 'react';

type SearchBarProps = {
    divStyle: string;
    inputStyle: string;
    buttonStyle: string;
    imageStyle?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ divStyle, inputStyle, buttonStyle, imageStyle }) => {
    // flex justify-center lg:justify-end
    // p-2 lg:p-4 text-2xl font-body1_font rounded-l-lg border-2 border-gray-300
    return (
        <div className={divStyle}>
            <input type="search" 
                className={inputStyle}
            />
            <button className={buttonStyle}>
                <img src="./search.png" alt="search"
                    className={imageStyle} />
            </button>
        </div>
    )
}

export default SearchBar;