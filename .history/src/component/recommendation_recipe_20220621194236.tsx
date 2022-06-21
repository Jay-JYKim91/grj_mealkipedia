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
                const ingredients = makeIngredientsArray(data);
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
            <h1 className="font-body1_font text-4xl">
                How about {recipe.title}?
            </h1>
            <div className="flex">
                <img src={recipe.imageURL} alt={recipe.title}
                    className="pr-4 max-w-sm max-h-sm" />
                <h2>{recipe.title}</h2>
                {/* <p>ingredients</p> */}
            </div>
        </div>
    )
}

function makeIngredientsArray(data: object): string[] {
    let array = [];
    for(let i = 1; i < 21; i++) {
        array.push(data[`strIngredient${i}`]);
    }
    return array;
}

export default RecommendationRecipe;