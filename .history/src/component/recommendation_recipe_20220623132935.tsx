import React from 'react';
import { RecipeType } from '../services/mealDB';
// import * as apiMeals from '../services/mealDB';
import Tag from './tag';

const RecommendationRecipe: React.FC<RecipeType> = ({ title, imageURL, ingredients, area, tags}) => {

    return (
        <div className="px-6 md:px-9 lg:px-12 py-6 lg:py-12">
            <h1 className="font-body1_font text-4xl mb-4">
                How about {title}?
            </h1>
            <div className="flex flex-col lg:flex-row font-body2_font">
                <img src={imageURL} alt={title}
                    className="lg:pr-4 max-w-xs max-h-xs" />
                <div className="py-4 flex flex-wrap justify-between">
                    <Tag type='area' content={area}/>
                    {tags && tags.map((tag) => {
                        return <Tag type='tag' content={tag} />
                    })}
                    
                    {/* <div> */}
                        {ingredients.map((ingredient) => {
                            return <p key={ingredient}>{ingredient}</p>
                        })}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default RecommendationRecipe;