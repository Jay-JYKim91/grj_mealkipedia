import React, { useRef } from 'react';
import * as apiMeals from '../services/mealDB';

type SearchBarProps = {
    divStyle: string;
    inputStyle: string;
    buttonStyle: string;
    imageStyle?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ divStyle, inputStyle, buttonStyle, imageStyle }) => {
    const keywordRef = useRef<HTMLInputElement>(null);
    
    const handleSearch = () => {
        let query: string;
        if (keywordRef.current) {
            query = keywordRef.current.value;
        } else {
            query = ''
        }

        apiMeals.searchRecipe(query);
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