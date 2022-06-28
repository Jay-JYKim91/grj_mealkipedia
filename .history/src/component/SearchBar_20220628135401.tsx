import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type SearchBarProps = {
    divStyle: string;
    inputStyle: string;
    buttonStyle: string;
    imageStyle?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({  divStyle, inputStyle, buttonStyle, imageStyle }) => {
    const [inputValue, setInputValue] = useState("");
    const navigate: NavigateFunction = useNavigate();

    // const HandleClick = () => {
    //     inputValue && navigate('/search', { state: inputValue });
    // }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        inputValue && navigate('/search', { state: inputValue });
    }

    return (
        <form className={divStyle} onSubmit={handleSearch}>
            <input type="search" 
                className={inputStyle}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button className={buttonStyle}>
                <img src="./search.png" alt="search"
                    className={imageStyle} />
            </button>
        </form>
    )
}

export default SearchBar;