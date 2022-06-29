import React from 'react';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Tag from './Tag';

const MAX_WORDS = 40;

type TodaysRecipeProp = {
    divStyle: string;
}

const TodaysRecipe: React.FC<TodaysRecipeProp> = ({ divStyle }) => {
    const navigate: NavigateFunction = useNavigate();

    const { isLoading, isError, data } = useQuery('getDefaultRecipe', () => apiMeals.getDefaultRecipe());

    if (isLoading) {
        return <span>loading...</span>
    }

    if (isError) {
        return <span>Error</span>
    }
    
    const { idMeal, strMeal, strArea, strCategory, strTags, strMealThumb, strInstructions } = data;
    
    const handleNavigateToResult = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        navigate('/result', { state: idMeal });
    }

    return (
        <div className={divStyle}>
            <h1 className="font-body1_font text-3xl lg:text-4xl mb-4">
                How about {strMeal}?
            </h1>
            <div className="flex flex-col items-center md:flex-row font-body2_font">
                <img src={strMealThumb} alt={strMeal}
                    className="md:pr-4 min-w-full md:min-w-[300px] max-w-xs max-h-xs" />
                <div className="py-2 flex flex-wrap">
                    <div className="py-1 flex flex-wrap items-start">
                        <Tag type='category' content={strCategory}/>
                        <Tag type='area' content={strArea}/>
                        {strTags && strTags.split(',').map((tag: string) => {
                            if (tag !== '') {
                                return <Tag type='restTag' content={tag} key={tag} />
                            }
                        })}
                    </div>
                    
                    {(strInstructions.split(' ').length >= MAX_WORDS) ? 
                        <p className="grow">{strInstructions.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...'}</p>
                        :
                        <p>{strInstructions}</p>}
                    <button 
                        className="p-2 md:p-0 my-2 min-w-full border-2 border-orange-900 rounded-lg 
                                bg-orange-500 hover:bg-white text-orange-900"
                        onClick={handleNavigateToResult}>
                            Read More
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default TodaysRecipe;