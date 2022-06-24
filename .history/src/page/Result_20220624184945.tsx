import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';

const Result: React.FC = () => {
    let { state } = useLocation();

    const { isLoading, isError, data } = useQuery('', () => apiMeals.searchRecipeById(state as string));
    if (isLoading) {
        return <span>loading...</span>
    }

    if (isError) {
        return <span>Error</span>
    }

    console.log(data);
    
    
    // const { idMeal, strMeal, strArea, strCategory, strTags, strMealThumb, strInstructions } = data;
    
    
    return (
        <h1>result</h1>
    )
}

export default Result;