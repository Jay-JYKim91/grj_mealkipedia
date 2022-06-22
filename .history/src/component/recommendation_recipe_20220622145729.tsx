import React, { useState, useEffect } from 'react';
import * as apiMeals from '../services/mealDB';

const RecommendationRecipe: React.FC = () => {
    const [recipe, setRecipe] = useState<apiMeals.RecipeType>({
        title: '',
        imageURL: '',
        area: '',
        tags: [],
        ingredients: []
    });

    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then(data => {
                console.log(data);
                
                // data = data! as apiMeals.RecipeType;
                
                // setRecipe({
                //     title: data.title,
                //     imageURL: data.imageURL,
                //     area: data.area,
                //     tags: data.tags,
                //     ingredients: data.ingredients
                // })
            })
    }, [])

    return (
        <div className="px-12 py-12">
            <h1 className="font-body1_font text-4xl">
                How about {recipe.title}?
            </h1>
            <div className="flex">
                <img src={recipe.imageURL} alt={recipe.title}
                    className="pr-4 max-w-sm max-h-sm" />
                <h2>{recipe.title}</h2>
                {/* {recipe.ingredients.map((ingredient) => {
                    <p>{ingredient}</p>
                })} */}
            </div>
        </div>
    )
}

// function makeIngredientsArray(data: any): string[] {
    
// }

export default RecommendationRecipe;