import React from 'react';
import { RecipeType } from '../services/mealDB';
// import * as apiMeals from '../services/mealDB';
import Tag from './tag';

const MAX_WORDS = 40;

const RecommendationRecipe: React.FC<RecipeType> = ({ title, imageURL, instruction, area, tags}) => {
    instruction = (instruction.split(' ').length >= MAX_WORDS) ? 
                    instruction.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...' : instruction;
    
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
                    <p>{instruction}</p>
                </div>
                <button 
                    className="p-2 border border-orange-900 rounded-lg 
                            bg-orange-500 hover:bg-white text-orange-900">
                        Read More
                </button>
            </div>
        </div>
    )
}

export default RecommendationRecipe;