import React from 'react';
import TodaysRecipe from '../component/TodaysRecipe';
import SearchBar from '../component/SearchBar';

const Search: React.FC = () => {

    return (
        <div className="px-6 md:px-9 lg:px-12 my-6">
            <SearchBar 
                divStyle="flex justify-center"
                inputStyle="p-1 lg:p-4 text-l font-body1_font rounded-l-lg border-2 border-gray-300 w-full"
                buttonStyle="p-2 bg-gray-300 rounded-r-lg"
                imageStyle="max-h-[30px]" />
            <div>
                <TodaysRecipe />
            </div>
        </div>
    )
}

export default Search;