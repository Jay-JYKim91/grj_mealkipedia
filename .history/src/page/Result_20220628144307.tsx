import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { BsCheckCircle } from "react-icons/bs";
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

    return (
        <div className="px-6 md:px-9 lg:px-12 my-6">
            <h1 className="font-body1_font text-4xl">
                {strMeal}
            </h1>
            <div className="py-2 flex flex-wrap">
                <Tag type='category' content={strCategory}/>
                <Tag type='area' content={strArea}/>
                {strTags && strTags.split(',').map((tag: string) => {
                    if (tag !== '' && tag !== strCategory) {
                        return <Tag type='restTag' content={tag} key={tag} />
                    }
                })}
            </div>
            <div className="flex justify-end mb-2">
                <a href={strYoutube} target="_blank">
                    <img className="w-8" src="/youtube.png" alt={strMeal}/>
                </a>
            </div>
            
            <div className="flex flex-col lg:flex-row font-body2_font">
                <img src={strMealThumb} alt={strMeal}
                    className="lg:pr-4 max-w-xs max-h-xs" />
                <div className="py-2">
                    <p className="font-body1_font text-2xl py-2">Ingredients</p>
                    <ul className="">
                        {
                            ingredientsArray.map((ingredient) => {
                                return (<li 
                                        className="font-body2_font text-lg"
                                        key={ingredient}
                                        ><BsCheckCircle />{ingredient}</li>)
                            })
                        }
                    </ul>
                    <hr className="my-5" />
                    <p className="font-body1_font text-2xl py-2">Instructions</p>
                    {/* {(strInstructions.split(' ').length >= MAX_WORDS) ? 
                        <p>{strInstructions.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...'}</p>
                        :
                        <p>{strInstructions}</p>} */}
                    {
                        strInstructions.split('\r\n').map((instruction: string) => {
                            return <p className="pb-2 font-body2_font text-lg" key={Math.random()}>{instruction}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Result;