import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';

const MAX_WORDS = 40;

const Result: React.FC = () => {
    let { state } = useLocation();

    const { isLoading, isError, data } = useQuery('searchRecipeById', () => apiMeals.searchRecipeById(state as string));
    if (isLoading) {
        return <span>loading...</span>
    }

    if (isError) {
        return <span>Error</span>
    }

    const { idMeal, strMeal, strArea, strCategory, strTags, strMealThumb, strInstructions } = data;
    
    
    return (
        <div className="lg:px-12 py-6 lg:py-12">
            <h1 className="font-body1_font text-4xl mb-4">
                {strMeal}
            </h1>
            <div className="flex flex-col lg:flex-row font-body2_font">
                <img src={strMealThumb} alt={strMeal}
                    className="lg:pr-4 max-w-xs max-h-xs" />
                <div className="py-4 flex flex-wrap">
                    <Tag type='category' content={strCategory}/>
                    <Tag type='area' content={strArea}/>
                    {strTags && strTags.split(',').map((tag: string) => {
                        if (tag !== '') {
                            return <Tag type='restTag' content={tag} />
                        }
                    })}
                    {(strInstructions.split(' ').length >= MAX_WORDS) ? 
                        <p>{strInstructions.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...'}</p>
                        :
                        <p>{strInstructions}</p>}
                </div>
            </div>
        </div>
    )
}

export default Result;