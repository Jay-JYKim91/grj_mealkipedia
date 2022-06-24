import React from 'react';
import { RecipeType } from '../services/mealDB';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Tag from './Tag';

const MAX_WORDS = 40;

const TodaysRecipe: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    const navigateRecipe = () => {
        navigate('/search');
    }

    // instruction = (instruction.split(' ').length >= MAX_WORDS) ? 
    //                 instruction.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...' : instruction;
    
    const { isLoading, isError, data, isSuccess } = useQuery('getDefaultRecipe', () => apiMeals.getDefaultRecipe());
    console.log(isLoading);
    
    console.log(data);
    console.log(isLoading);
    // const { strArea, strCategory, strMeal, strTags, strMealThumb, strInstructions } = data;
    
    // console.log(strArea);
    
    return (
        <div className="px-6 md:px-9 lg:px-12 py-6 lg:py-12">
            {!isLoading && (
                <>
                <h1 className="font-body1_font text-4xl mb-4">
                    How about {strMeal}?
                </h1>
                <div className="flex flex-col lg:flex-row font-body2_font">
                    <img src={strMealThumb} alt={strMeal}
                        className="lg:pr-4 max-w-xs max-h-xs" />
                    <div className="py-4 flex flex-wrap justify-between">
                        <Tag type='area' content={strArea}/>
                        <Tag type='area' content={strCategory}/>
                        {strTags && strTags.split(',').map((tag: string) => {
                            return <Tag type='tag' content={tag} />
                        })}
                        <p>{instruction}</p>
                    </div>
                    <button 
                        className="p-2 border-2 border-orange-900 rounded-lg 
                                bg-orange-500 hover:bg-white text-orange-900"
                        onClick={navigateRecipe}>
                            Read More
                    </button>
                </div></>
            )}
        </div>
    )
}

export default TodaysRecipe;