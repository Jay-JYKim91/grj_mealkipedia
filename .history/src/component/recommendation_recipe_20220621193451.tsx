import React, { useState } from 'react';
import * as apiMeals from '../services/mealDB';

type Recipe = {
    title: string,
    imageURL: string,
    area: string,
    tag: string
}

const RecommendationRecipe = () => {
    const [recipe, setRecipe] = useState<Recipe>({
        title: '',
        imageURL: '',
        area: '',
        tag: ''
    });

    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then(data => {
                setRecipe({
                    title: data.strMeal,
                    imageURL: data.strMealThumb,
                    area: data.strArea,
                    tag: data.strTags
                })
            })
    },[])
    
    return (

    )
}

export default RecommendationRecipe;