import React, { useEffect } from 'react';
import * as apiMeals from '../services/mealDB';

const Recipe: React.FC = () => {
    console.log(apiMeals.fetchRandomRecipe());
    
    // useEffect(() => {
    //     console.log(apiMeals.fetchRandomRecipe());
        
    //     // async () => {
    //     //     const data = await apiMeals.fetchRandomRecipe();
    //     //     console.log(data);
    //     // }
    // }, [])
    
    return (
        <h1>recipe</h1>
    )
}

export default Recipe;