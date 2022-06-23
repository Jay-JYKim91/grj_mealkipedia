import React from 'react';
import { RecipeType } from '../services/mealDB';
// import * as apiMeals from '../services/mealDB';
import Tag from './tag';

const RecommendationRecipe: React.FC<RecipeType> = ({ title, imageURL, instruction, area, tags}) => {
    instruction = (instruction.length >= 140) ? instruction.substring(0, 140) : instruction;
    
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
                    <p>{
                        instruction
                    }</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendationRecipe;