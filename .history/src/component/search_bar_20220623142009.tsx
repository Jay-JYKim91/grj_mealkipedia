import React from 'react';

type SearchBarProps = {
    style: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ style }) => {

    return (
        <div className="flex justify-center lg:justify-end">
            <input type="search" 
                className="p-2 lg:p-4 text-2xl font-body1_font rounded-l-lg border-2 border-gray-300"
            />
            <button className="p-4 bg-gray-300 rounded-r-lg">
                <img src="./search.png" alt="search" />
            </button>
        </div>
    )
}

export default SearchBar;