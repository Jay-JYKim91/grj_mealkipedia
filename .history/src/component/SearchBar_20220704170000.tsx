import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type SearchBarProps = {
    divStyle: string;
    inputStyle: string;
    buttonStyle: string;
    imageStyle?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
    divStyle,
    inputStyle,
    buttonStyle,
    imageStyle,
}) => {
    const [inputValue, setInputValue] = useState('');
    const navigate: NavigateFunction = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        inputValue && navigate('/search', { state: inputValue });
        setInputValue('');
    };

    return (
        <form className={divStyle} onSubmit={handleSearch}>
            <input
                type="search"
                className={inputStyle}
                placeholder="Find a Recipe"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button className={buttonStyle} type="submit">
                <img src="./search.png" alt="search" className={imageStyle} />
            </button>
        </form>
    );
};

SearchBar.defaultProps = {
    imageStyle: ''
}

export default SearchBar;
