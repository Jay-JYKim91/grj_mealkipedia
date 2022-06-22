import React, { useState, useEffect } from 'react';
import * as apiMeals from '../services/mealDB';
import Tag from './tag';

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
        <div className="px-6 md:px-9 lg:px-12 py-6 lg:py-12">
            <h1 className="font-body1_font text-4xl mb-4">
                How about {recipe.title}?
            </h1>
            <div className="flex flex-col lg:flex-row font-body2_font">
                <img src={recipe.imageURL} alt={recipe.title}
                    className="lg:pr-4 max-w-xs max-h-xs" />
                <div className="py-4 flex flex-wrap justify-between">
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />

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