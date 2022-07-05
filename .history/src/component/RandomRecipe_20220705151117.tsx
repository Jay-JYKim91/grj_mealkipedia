import React from 'react';
import { useQuery } from 'react-query';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import * as apiMeals from '../services/mealDB';
import Error from './Error';
import Loading from './Loading';
import Tag from './Tag';

const MOBILE_MAX_WORDS = 40;
const DESKTOP_MAX_CHARS = 100;

type TodaysRecipeProp = {
    divStyle: string;
};

const TodaysRecipe: React.FC<TodaysRecipeProp> = ({ divStyle }) => {
    const navigate: NavigateFunction = useNavigate();

    const { isLoading, isError, data } = useQuery('getDefaultRecipe', () =>
        apiMeals.getDefaultRecipe()
    );

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    const {
        idMeal,
        strMeal,
        strArea,
        strCategory,
        strTags,
        strMealThumb,
        strInstructions,
    } = data;

    const handleNavigateToResult = (
        event: React.MouseEvent<HTMLButtonElement>
    ): void => {
        event.preventDefault();
        navigate('/result', { state: idMeal });
    };

    return (
        <div className={divStyle}>
            <h1 className="font-body1_font text-3xl lg:text-4xl mb-4">
                How about {strMeal}?
            </h1>
            <div className="flex flex-col md:flex-row font-body2_font">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="md:pr-4 min-w-full md:min-w-[350px] lg:min-w-[400px] max-w-xs max-h-xs"
                />
                <div className="pt-2 md:pt-0 flex flex-col ">
                    <div className="py-1 flex flex-wrap items-start min-h-min">
                        <Tag type="category" content={strCategory} />
                        <Tag type="area" content={strArea} />
                        {strTags &&
                            strTags
                                .split(',')
                                .map(
                                    (tag: string) =>
                                        tag && (
                                            <Tag
                                                type="restTag"
                                                content={tag}
                                                key={tag}
                                            />
                                        )
                                )}
                    </div>
                    <p className="grow self-auto md:hidden">
                        {strInstructions.split(' ').length >= MOBILE_MAX_WORDS
                            ? strInstructions
                                  .split(' ')
                                  .slice(0, MOBILE_MAX_WORDS)
                                  .join(' ') + ' ...'
                            : strInstructions}
                    </p>
                    <p className="grow self-auto hidden md:block">
                        {strInstructions.split('').length >= DESKTOP_MAX_CHARS
                            ? strInstructions
                                  .split(' ')
                                  .slice(0, DESKTOP_MAX_CHARS)
                                  .join(' ') + ' ...'
                            : strInstructions}
                    </p>
                    <button
                        type="button"
                        className="p-2 mt-2 border-2 border-orange-900 rounded-lg 
                                bg-orange-500 hover:bg-white text-orange-900
                                lg:text-xl"
                        onClick={handleNavigateToResult}
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodaysRecipe;
