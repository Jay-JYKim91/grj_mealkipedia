import React, { useState, useEffect } from 'react';
import * as apiMeals from '../services/mealDB';

const RecommendationRecipe: React.FC = () => {
    const [recipe, setRecipe] = useState<apiMeals.RecipeType>
    ({
        title: '',
        imageURL: '',
        area: '',
        tags: [],
        ingredients: []
    });

    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then((data) => {
                data = data! as apiMeals.RecipeType;
                
                setRecipe({
                    title: data.title,
                    imageURL: data.imageURL,
                    area: data.area,
                    tags: data.tags,
                    ingredients: data.ingredients
                })
            })
    }, [])

    return (
        <div className="px-12 py-12">
            <h1 className="font-body1_font text-4xl mb-4">
                How about {recipe.title}?
            </h1>
            <div className="flex font-body2_font">
                <img src={recipe.imageURL} alt={recipe.title}
                    className="pr-4 max-w-xs max-h-xs" />
                <div>
                    <h2>{recipe.area}</h2>
                    {/* <div> */}
                        {recipe.ingredients.map((ingredient) => {
                            return <p key={ingredient}>{ingredient}</p>
                        })}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default RecommendationRecipe;