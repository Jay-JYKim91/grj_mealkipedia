import React, { useRef } from 'react';
import * as apiMeals from '../services/mealDB';

type SearchBarProps = {
    onSearch(value: string): apiMeals.RecipeType;
    divStyle: string;
    inputStyle: string;
    buttonStyle: string;
    imageStyle?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, divStyle, inputStyle, buttonStyle, imageStyle }) => {
    const keywordRef = useRef<HTMLInputElement>(null);
    
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

    return (
        <div className={divStyle}>
            <input type="search" 
                className={inputStyle}
                ref={keywordRef}
            />
            <button className={buttonStyle} onClick={onClick}>
                <img src="./search.png" alt="search"
                    className={imageStyle} />
            </button>
        </div>
    )
}

export default SearchBar;