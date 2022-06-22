import React, { useState, useEffect } from 'react';
import * as apiMeals from '../services/mealDB';

type Recipe = {
    title: string,
    imageURL: string,
    area: string,
    tag: string,
    ingredients: string[]
}


const RecommendationRecipe: React.FC = () => {
    const [recipe, setRecipe] = useState<Recipe>({
        title: '',
        imageURL: '',
        area: '',
        tag: '',
        ingredients: []
    });

    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then(data => {
                const ingredients = makeIngredientsArray(data);
                setRecipe({
                    title: data.strMeal,
                    imageURL: data.strMealThumb,
                    area: data.strArea,
                    tag: data.strTags,
                    ingredients: ingredients
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
                <div>
                {recipe.ingredients.map((ingredient) => {
                    <p>{ingredient}</p>
                })}
                </div>
                
            </div>
        </div>
    )
}

function makeIngredientsArray(data: any): string[] {
    let array = [];
    for(let i = 1; i < 21; i++) {
        let name = `strIngredient${i}`
        array.push(data[name]);
    }
    return array;
}

export default RecommendationRecipe;