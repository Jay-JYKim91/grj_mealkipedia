import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';

const Result: React.FC = () => {
    let { state } = useLocation();

    const { isLoading, isError, data } = useQuery('', () => apiMeals.searchRecipeById(state as string));
    console.log(data);
    
    
    return (
        <h1>result</h1>
    )
}

export default Result;