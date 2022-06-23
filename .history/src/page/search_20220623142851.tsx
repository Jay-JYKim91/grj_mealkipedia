import React from 'react';
import SearchBar from '../component/search_bar';

const Search: React.FC = () => {
        // flex justify-center lg:justify-end
    // 

    return (
        <div className="px-6 md:px-9 lg:px-12 my-6">
            <SearchBar 
                divStyle="flex justify-center"
                inputStyle="p-2 lg:p-4 text-xl font-body1_font rounded-l-lg border-2 border-gray-300" />
        </div>
    )
}

export default Search;