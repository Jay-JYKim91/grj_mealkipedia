import React, { useEffect } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import TodaysRecipe from '../component/TodaysRecipe';
import SearchBar from '../component/SearchBar';

import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';

const MAX_WORDS = 24;

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

    let { isLoading, isError, data, error, refetch } = useQuery(
        'searchRecipeByQuery',
        () => apiMeals.searchRecipeByQuery(state)
    );

    useEffect(() => {
        isLoading = true;
        refetch();
    }, [state]);

    if (isLoading) {
        return (
            <div className="px-6 md:px-9 lg:px-12 my-6">
                <SearchBar
                    divStyle="flex justify-center"
                    inputStyle="p-1 lg:p-4 text-l font-body1_font rounded-l-lg border-2 border-gray-300 w-full"
                    buttonStyle="p-2 bg-gray-300 rounded-r-lg"
                    imageStyle="max-h-[30px]"
                />
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
            </div>
        );
    }

    if (isError) {
        console.log(error);
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
                        found for &apos;{state}&apos;
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
                                <div className="mb-5 border-white rounded-lg shadow-2xl md:max-w-[340px] lg:max-w-[300px] xl:max-w-[285px]" 
                                    key={item.idMeal} >
                                    <img src={item.strMealThumb} alt={item.strMeal}
                                        className="lg:pr-4 max-w-full max-h-xs rounded-[8px_8px_0px_0px]" />
                                    <div className="p-4">
                                        <div className="flex flex-wrap">
                                            <Tag content={item.strCategory} type='category' />
                                            <Tag content={item.strArea} type='area' />
                                            {item.strTags && item.strTags.split(',').map((tag: string) => {
                                                if (tag !== '') {
                                                    return <Tag type='restTag' content={tag} key={tag} />
                                                }
                                            })}
                                        </div>
                                        <p className="font-body1_font text-2xl">{item.strMeal}</p>
                                        {(item.strInstructions.split(' ').length >= MAX_WORDS) ? 
                                            <p>{item.strInstructions.split(' ').slice(0, MAX_WORDS).join(' ') + ' ...'}</p>
                                            :
                                            <p>{item.strInstructions}</p>}
                                        <div className="flex justify-end">
                                            <button 
                                                className="p-1 mt-2 border-2 min-w-[150px] border-orange-900 rounded-lg 
                                                        bg-orange-500 hover:bg-white text-orange-900"
                                                onClick={(e) => handleNavigateToResult(e, item.idMeal)}
                                                >
                                                    Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                {
                    !data && (<div>
                        <p className="py-10 font-body2_font text-center text-lg">
                            No results found for &apos;{state}&apos;
                        </p>
                        <TodaysRecipe divStyle="lg:px-12 lg:py-12" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
