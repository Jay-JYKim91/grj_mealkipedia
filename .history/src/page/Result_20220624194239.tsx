import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';

const Result: React.FC = () => {
    let { state } = useLocation();

    const { isLoading, isError, data } = useQuery('searchRecipeById', () => apiMeals.searchRecipeById(state as string));
    if (isLoading) {
        return <span>loading...</span>
    }

    if (isError) {
        return <span>Error</span>
    }

    const { strMeal, strArea, strCategory, strTags, strMealThumb, strInstructions, strYoutube } = data;
    const ingredientsArray: string[] = [];

    for(let i = 1; i < 21; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;

        if(data[ingredient]) {
            ingredientsArray.push(`${data[measure]} ${data[ingredient]}`)
        }
    }

    console.log(ingredientsArray);

    return (
        <div className="px-6 md:px-9 lg:px-12 my-6">
            <h1 className="font-body1_font text-4xl mb-4">
                {strMeal}
            </h1>
            <div className="py-4 flex flex-wrap">
                <Tag type='category' content={strCategory}/>
                <Tag type='area' content={strArea}/>
                {strTags && strTags.split(',').map((tag: string) => {
                    if (tag !== '' && tag !== strCategory) {
                        return <Tag type='restTag' content={tag} />
                    }
                })}
            </div>
            <a href={strYoutube}>
                <img className="mr-0" src="/youtube.png" alt={strMeal}/>
            </a>
            <div className="flex flex-col lg:flex-row font-body2_font">
                <img src={strMealThumb} alt={strMeal}
                    className="lg:pr-4 max-w-xs max-h-xs" />
                <div>
                    
                    
                    <p>Ingredients</p>
                    {
                        ingredientsArray.map((ingredient) => {
                            return <p>{ingredient}</p>
                        })
                    }
                    <p>Instructions</p>
                    {/* {(strInstructions.split(' ').length >= MAX_WORDS) ? 
                        <p>{strInstructions.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...'}</p>
                        :
                        <p>{strInstructions}</p>} */}
                    <p>{strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default Result;