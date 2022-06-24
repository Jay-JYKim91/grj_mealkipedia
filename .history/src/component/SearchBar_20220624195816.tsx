import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
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

    const { isLoading, isError, data, error } = useQuery('searchRecipeByQuery', () => apiMeals.searchRecipeByQuery(inputValue));
    
    const navigate: NavigateFunction = useNavigate();

    const navigateSearch = (inputValue: string) => {
        navigate('/search', { state: inputValue });
    };

    const HandleClick = () => {
        
        if (isLoading) {

        }

        if (isError) {
            console.log(error);
        }
        // console.log(data);
        
        navigateSearch(inputValue);
    }

    return (
        <div className={divStyle}>
            <input type="search" 
                className={inputStyle}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button className={buttonStyle} onClick={HandleClick}>
                <img src="./search.png" alt="search"
                    className={imageStyle} />
            </button>
        </div>
    )
}

export default SearchBar;