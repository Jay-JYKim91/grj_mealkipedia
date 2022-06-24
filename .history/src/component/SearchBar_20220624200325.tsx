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

    const HandleClick = () => {
        
        // if (isLoading) {

        // }

        // if (isError) {
        //     console.log(error);
        // }
        // console.log(data);
        navigate('/search', { state: inputValue });
        // navigateSearch(inputValue);
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