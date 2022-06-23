import React, { useState } from 'react';
import { setConstantValue } from 'typescript';

type SearchBarProps = {
    onSearch(value: string): [];
    divStyle: string;
    inputStyle: string;
    buttonStyle: string;
    imageStyle?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, divStyle, inputStyle, buttonStyle, imageStyle }) => {
    const [inputValue, setInputValue] = useState("");
    // const keywordRef = useRef<HTMLInputElement>(null);
    
    const handleSearch = () => {
        let query: string;
        if (keywordRef.current) {
            query = keywordRef.current.value;
        } else {
            query = ''
        }

        onSearch(query);
    }

    const onClick = () => {
        handleSearch();
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    return (
        <div className={divStyle}>
            <input type="search" 
                className={inputStyle}
                // ref={keywordRef}
                value={inputValue}
                onChange={handleChange}
            />
            <button className={buttonStyle} onClick={onClick}>
                <img src="./search.png" alt="search"
                    className={imageStyle} />
            </button>
        </div>
    )
}

export default SearchBar;