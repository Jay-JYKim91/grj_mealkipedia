import React, { useState, useEffect } from 'react';
import * as apiMeals from '../services/mealDB';

type Recipe = {
    title: string,
    imageURL: string,
    area: string,
    tag: string
}

const RecommendationRecipe: React.FC = () => {
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
        <div className="px-12 py-12">
            <h1 className="font-body1_font text-4xl">How about {recipe.title}</h1>
            <div className="flex">
                <img src={recipe.imageURL} alt={recipe.title}
                    className="pr-4 max-w-md" />
                <h2>{recipe.title}</h2>
                {/* <p>ingredients</p> */}
            </div>
        </div>
    )
}

export default RecommendationRecipe;