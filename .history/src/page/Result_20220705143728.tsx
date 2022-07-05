import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdCheckCircle } from 'react-icons/md';
import { GiSpoon } from 'react-icons/gi';
import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';
import Loading from '../component/Loading';
import Error from '../component/Error';

const Result: React.FC = () => {
    let { state } = useLocation();

    const { isLoading, isError, data } = useQuery('searchRecipeById', () =>
        apiMeals.searchRecipeById(state as string)
    );

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    const {
        strMeal,
        strArea,
        strCategory,
        strTags,
        strMealThumb,
        strInstructions,
        strYoutube,
    } = data;
    const ingredientsArray: string[] = [];

    for (let i = 1; i < 21; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;

        if (data[ingredient]) {
            ingredientsArray.push(`${data[measure]} ${data[ingredient]}`);
        }
    }

    return (
        <div className="px-6 md:px-9 lg:px-12 my-6 max-w-7xl m-auto">
            <h1 className="font-body1_font text-4xl">{strMeal}</h1>
            <div className="py-2 flex flex-wrap">
                <Tag type="category" content={strCategory} />
                <Tag type="area" content={strArea} />
                {strTags &&
                    strTags
                        .split(',')
                        .map(
                            (tag: string) =>
                                tag &&
                                tag !== strCategory && (
                                    <Tag
                                        type="restTag"
                                        content={tag}
                                        key={tag}
                                    />
                                )
                        )}
            </div>
            {strYoutube && (
                <div className="flex justify-end mb-2">
                    <a
                        href={strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="w-8" src="/youtube.png" alt={strMeal} />
                    </a>
                </div>
            )}

            <div className="flex flex-col md:flex-row font-body2_font">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="md:pr-4 max-w-xs max-h-xs min-w-full md:min-w-[50%] md:h-fit"
                />
                <div className="py-2 md:py-0">
                    <p className="font-body1_font text-2xl md:text-3xl py-2 md:pt-0">
                        Ingredients
                    </p>
                    {ingredientsArray.map((ingredient) => {
                        return (
                            <p
                                className="flex items-center text-slate-600"
                                key={ingredient}
                            >
                                <MdCheckCircle className="mr-2 text-orange-500" />
                                <span className="font-body2_font text-lg">
                                    {ingredient}
                                </span>
                            </p>
                        );
                    })}
                    <hr className="my-5" />
                    <p className="font-body1_font text-2xl md:text-3xl py-2">
                        Instructions
                    </p>
                    {strInstructions
                        .split('\r\n')
                        .filter((n: string) => {
                            if (n.length < 10) {
                                return;
                            }
                            return n;
                        })
                        .map((instruction: string, index: number) => {
                            return (
                                <>
                                    <p className="flex items-center">
                                        <GiSpoon className="mr-2 text-orange-500" />
                                        STEP {index + 1}
                                    </p>
                                    <p
                                        className="pb-2 font-body2_font text-lg text-slate-600"
                                        key={Math.random()}
                                    >
                                        {instruction}
                                    </p>
                                </>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Result;
