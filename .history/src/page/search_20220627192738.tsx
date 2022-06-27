import React from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import TodaysRecipe from '../component/TodaysRecipe';
import SearchBar from '../component/SearchBar';
import { useQuery } from 'react-query';
// import ClickHandler from '../component/TodaysRecipe';
import * as apiMeals from '../services/mealDB';
import Tag from '../component/Tag';

const MAX_WORDS = 24;

type Recipe = {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1?: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
    strIngredient5?: string,
    strIngredient6?: string,
    strIngredient7?: string,
    strIngredient8?: string,
    strIngredient9?: string,
    strIngredient10?: string,
    strIngredient11?: string,
    strIngredient12?: string,
    strIngredient13?: string,
    strIngredient14?: string,
    strIngredient15?: string,
    strIngredient16?: string,
    strIngredient17?: string,
    strIngredient18?: string,
    strIngredient19?: string,
    strIngredient20?: string,
    strMeasure1?: string,
    strMeasure2?: string,
    strMeasure3?: string,
    strMeasure4?: string,
    strMeasure5?: string,
    strMeasure6?: string,
    strMeasure7?: string,
    strMeasure8?: string,
    strMeasure9?: string,
    strMeasure10?: string,
    strMeasure11?: string,
    strMeasure12?: string,
    strMeasure13?: string,
    strMeasure14?: string,
    strMeasure15?: string,
    strMeasure16?: string,
    strMeasure17?: string,
    strMeasure18?: string,
    strMeasure19?: string,
    strMeasure20?: string,
}

const Search: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    let { state } = useLocation();
    state = state as string;

    const clickHandler = (idMeal: string) => (e: MouseEvent) => {
        e.preventDefault();
        navigate('/result', { state: idMeal });
    };
    
    const { isLoading, isError, data, error } = useQuery('searchRecipeByQuery', () => apiMeals.searchRecipeByQuery(state));

    if (isLoading) {

    }

    if (isError) {
        console.log(error);
    }

    // console.log(data);


    return (
        <div className="px-6 md:px-9 lg:px-12 my-6">
            <SearchBar 
                divStyle="flex justify-center"
                inputStyle="p-1 lg:p-4 text-l font-body1_font rounded-l-lg border-2 border-gray-300 w-full"
                buttonStyle="p-2 bg-gray-300 rounded-r-lg"
                imageStyle="max-h-[30px]" />
            <div>
                { data && 
                    <p className="py-2 font-body2_font text-lg">
                        {data.length} {data.length === 1 ? 'result' : 'results'} found for '{state}'
                    </p>
                }
                {
                    data && data.map((item: Recipe) => {
                        let ingredientsArray = []; 
                        for(let i = 1; i < 21; i++) {
                            const ingredient = `strIngredient${i}`;
                            const measure = `strMeasure${i}`;
                    
                            if(data[ingredient]) {
                                ingredientsArray.push(`${data[measure]} ${data[ingredient]}`)
                            }
                        }

                        return <div className="py-2" key={item.idMeal} onClick={clickHandler(item.idMeal)}>
                            <img src={item.strMealThumb} alt={item.strMeal}
                                className="lg:pr-4 max-w-full max-h-xs" />
                            <div className="flex flex-wrap py-2">
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
                                className="p-1 border-1 border-orange-900 rounded-lg 
                                        bg-orange-500 hover:bg-white text-orange-900"
                                >
                                    Read More
                            </button>
                            </div>
                        </div>
                    })
                }
                {
                    !data && <div>
                        <p className="py-10 font-body2_font text-center text-lg">
                            No results found for '{state}'
                        </p>
                        <TodaysRecipe divStyle="lg:px-12 lg:py-12" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Search;