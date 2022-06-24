import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';

type SearchBarProps = {
    divStyle: string;
    inputStyle: string;
    buttonStyle: string;
    imageStyle?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({  divStyle, inputStyle, buttonStyle, imageStyle }) => {
    const [inputValue, setInputValue] = useState("");


    const handClick = () => {
        const { isLoading, isError, data } = useQuery('searchRecipe', () => apiMeals.searchRecipe(inputValue));

        if (isLoading) {
            return <span>loading...</span>
        }

        if (isError) {
            return <span>Error</span>
        }

        console.log(data);
    }

    return (
        <div className={divStyle}>
            <input type="search" 
                className={inputStyle}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button className={buttonStyle} onClick={handClick}>
                <img src="./search.png" alt="search"
                    className={imageStyle} />
            </button>
        </div>
    )
}

export default SearchBar;