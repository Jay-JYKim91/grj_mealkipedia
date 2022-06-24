import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';

const Result: React.FC = () => {
    const { state } = useLocation();
    console.log(Number(state));

    const { isLoading, isError, data } = useQuery('getDefaultRecipe', () => apiMeals.getDefaultRecipe());

    
    return (
        <h1>result</h1>
    )
}

export default Result;