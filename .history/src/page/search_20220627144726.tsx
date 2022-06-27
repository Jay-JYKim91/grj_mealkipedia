import React from 'react';
import { useLocation } from 'react-router-dom';
import TodaysRecipe from '../component/TodaysRecipe';
import SearchBar from '../component/SearchBar';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';

type Recipe = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1?: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
    strIngredient5?: string,
    strIngredient6?: string,
    strIngredient7?: string,
    strIngredient8?: string,
    strIngredient9?: string,
    strIngredient10?: string,
    strIngredient11?: string,
    strIngredient12?: string,
    strIngredient13?: string,
    strIngredient14?: string,
    strIngredient15?: string,
    strIngredient16?: string,
    strIngredient17?: string,
    strIngredient18?: string,
    strIngredient19?: string,
    strIngredient20?: string,
    strMeasure1?: string,
    strMeasure2?: string,
    strMeasure3?: string,
    strMeasure4?: string,
    strMeasure5?: string,
    strMeasure6?: string,
    strMeasure7?: string,
    strMeasure8?: string,
    strMeasure9?: string,
    strMeasure10?: string,
    strMeasure11?: string,
    strMeasure12?: string,
    strMeasure13?: string,
    strMeasure14?: string,
    strMeasure15?: string,
    strMeasure16?: string,
    strMeasure17?: string,
    strMeasure18?: string,
    strMeasure19?: string,
    strMeasure20?: string,
}

const Search: React.FC = () => {
    let { state } = useLocation();
    state = state as string;
    
    const { isLoading, isError, data, error } = useQuery('searchRecipeByQuery', () => apiMeals.searchRecipeByQuery(state));

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
                {
                    data.map((item: ) => {
                        return <p>{item.strMeal}</p>
                    })
                }
                {
                    !data && <TodaysRecipe divStyle="lg:px-12 py-6 lg:py-12" />
                }
            </div>
        </div>
    )
}

export default Search;