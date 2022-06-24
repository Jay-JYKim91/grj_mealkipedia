import React from 'react';
import { useLocation } from 'react-router-dom';
import TodaysRecipe from '../component/TodaysRecipe';
import SearchBar from '../component/SearchBar';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';


const Search: React.FC = () => {
    let { state } = useLocation();
    state = state as string;

    const { isLoading, isError, data, error } = useQuery('searchRecipeByQuery', () => apiMeals.searchRecipeByQuery('dfs'));

    if (isLoading) {

    }

    if (isError) {
        console.log(error);
    }

    console.log(data);


    return (
        <div className="px-6 md:px-9 lg:px-12 my-6">
            <SearchBar 
                divStyle="flex justify-center"
                inputStyle="p-1 lg:p-4 text-l font-body1_font rounded-l-lg border-2 border-gray-300 w-full"
                buttonStyle="p-2 bg-gray-300 rounded-r-lg"
                imageStyle="max-h-[30px]" />
            <div>
                {/* {
                    data.length === 0 && <TodaysRecipe divStyle="lg:px-12 py-6 lg:py-12" />
                } */}
            </div>
        </div>
    )
}

export default Search;