import React, { useEffect } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import TodaysRecipe from '../component/RandomRecipe';
import SearchBar from '../component/SearchBar';

import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';
import Loading from '../component/Loading';
import Error from '../component/Error';

type Recipe = {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;
    strIngredient16?: string;
    strIngredient17?: string;
    strIngredient18?: string;
    strIngredient19?: string;
    strIngredient20?: string;
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;
    strMeasure16?: string;
    strMeasure17?: string;
    strMeasure18?: string;
    strMeasure19?: string;
    strMeasure20?: string;
};

interface LocationState {
    state: string;
}

const Search: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();
    const { state } = location as LocationState;

    let { isLoading, isError, data, refetch } = useQuery(
        'searchRecipeByQuery',
        () => apiMeals.searchRecipeByQuery(state)
    );

    useEffect(() => {
        refetch();
    }, [state]);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    const handleNavigateToResult = (
        event: React.MouseEvent<HTMLDivElement>,
        idMeal: string
    ): void => {
        event.preventDefault();
        navigate('/result', { state: idMeal });
    };

    return (
        <div className="px-6 md:px-9 lg:px-12 my-6 max-w-7xl m-auto">
            <SearchBar
                divStyle="flex justify-center"
                inputStyle="p-1 lg:p-4 text-l font-body1_font rounded-l-lg border-2 border-gray-300 w-full"
                buttonStyle="p-2 bg-gray-300 rounded-r-lg"
                imageStyle="max-h-[30px]"
            />
            <div>
                {data && (
                    <p className="py-3 font-body2_font text-lg">
                        {data.length} {data.length === 1 ? 'result' : 'results'}
                        &nbsp;found for &apos;{state}&apos;
                    </p>
                )}
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {data &&
                        data.map((item: Recipe) => {
                            let ingredientsArray = [];
                            for (let i = 1; i < 21; i++) {
                                const ingredient = `strIngredient${i}`;
                                const measure = `strMeasure${i}`;
                                if (data[ingredient]) {
                                    ingredientsArray.push(
                                        `${data[measure]} ${data[ingredient]}`
                                    );
                                }
                            }

                            return (
                                <div
                                    className="mb-5 border-white rounded-lg shadow-3xl md:max-w-[340px] lg:max-w-[300px] xl:max-w-[285px] relative hover:translate-x-1 hover:translate-y-1"
                                    key={item.idMeal}
                                    onClick={(
                                        e: React.MouseEvent<
                                            HTMLDivElement,
                                            MouseEvent
                                        >
                                    ) => handleNavigateToResult(e, item.idMeal)}
                                >
                                    <img
                                        src={item.strMealThumb}
                                        alt={item.strMeal}
                                        className="max-w-full max-h-xs rounded-[8px_8px_0px_0px]"
                                    />
                                    <div className="p-4">
                                        <div className="flex flex-wrap">
                                            <Tag
                                                content={item.strCategory}
                                                type="category"
                                            />
                                            <Tag
                                                content={item.strArea}
                                                type="area"
                                            />
                                            {item.strTags &&
                                                item.strTags
                                                    .split(',')
                                                    .map(
                                                        (tag: string) =>
                                                            tag && (
                                                                <Tag
                                                                    type="restTag"
                                                                    content={
                                                                        tag
                                                                    }
                                                                    key={tag}
                                                                />
                                                            )
                                                    )}
                                        </div>
                                        <p className="font-body1_font text-2xl pb-12">
                                            {item.strMeal}
                                        </p>
                                        <div className="flex justify-end absolute bottom-4 right-4">
                                            <button
                                                type="button"
                                                className="p-1 mt-2 border-2 min-w-[150px] border-orange-900 rounded-lg 
                                                        bg-orange-500 hover:bg-white text-orange-900"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                {!data && (
                    <div>
                        <p className="pt-20 pb-12 font-body2_font text-center text-xl">
                            No results found for &apos;{state}&apos;
                        </p>
                        <TodaysRecipe divStyle="lg:py-12" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
