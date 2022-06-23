import React from 'react';
import SearchBar from '../component/search_bar';

const Search: React.FC = () => {
        // flex justify-center lg:justify-end
    // 

    return (
        <SearchBar 
            divStyle="flex justify-center my-8"
            inputStyle="p-2 lg:p-4 text-2xl font-body1_font rounded-l-lg border-2 border-gray-300" />
    )
}

export default Search;