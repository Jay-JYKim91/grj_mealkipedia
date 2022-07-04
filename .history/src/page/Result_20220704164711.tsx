import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdCheckCircle } from 'react-icons/md';
import { GiSpoon } from 'react-icons/gi';
import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';

const Result: React.FC = () => {
    let { state } = useLocation();

    const { isLoading, isError, data } = useQuery('searchRecipeById', () =>
        apiMeals.searchRecipeById(state as string)
    );

    if (isLoading) {
        return (
            <div className="text-center py-10">
                <svg
                    role="status"
                    className="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <p className="mt-4">Loading...</p>
            </div>
        );
    }

    if (isError) {
        return <span>Error</span>;
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
                                    <p className="pb-2 font-body2_font text-lg text-slate-600" key={Math.random()}>
                                        {instruction}
                                    </p>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Result;