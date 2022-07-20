import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import Error from '../component/Error';
import Loading from '../component/Loading';
import Tag from '../component/Tag';
import * as apiMeals from '../services/mealDB';
import { LocationState } from './Search';

type FetchedCategory = {
    strCategory: string;
};

type FetchedRecipe = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
};

const Category: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location as LocationState;
    const [selectedCategory, setSelectedCategory] = useState(state || 'beef');
    const [itemCount, setItemCount] = useState(10);
    const [data, setData] = useState([]);

    const categories = useQuery('getCategories', () =>
        apiMeals.getCategories()
    );

    const filteredRecipes = useQuery(
        'getFilteredRecipes',
        () => apiMeals.getFilteredRecipes(selectedCategory),
        {
            onSuccess: (res) => {
                setData(res.slice(0, itemCount));
            },
        }
    );

    useEffect(() => {
        setItemCount(10);
        filteredRecipes.refetch();
    }, [selectedCategory]);

    useEffect(() => {
        console.log(itemCount);
        console.log(filteredRecipes.data);
        if (filteredRecipes.data && filteredRecipes.data.length > itemCount) {
            setData(filteredRecipes.data.slice(0, itemCount));
        }
        console.log(data);
    }, [itemCount]);

    if (categories.isLoading || filteredRecipes.isLoading) {
        return <Loading />;
    }

    if (categories.isError || filteredRecipes.isError) {
        return <Error />;
    }

    return (
        <div className="max-w-7xl m-auto my-6 px-6 md:px-9 lg:px-12">
            <div className="overflow-x-scroll mb-4">
                <ul className="flex ">
                    {categories.data.map((category: FetchedCategory) => {
                        return (
                            <li
                                key={category.strCategory}
                                className="my-2 cursor-pointer"
                                role="presentation"
                                onClick={() =>
                                    setSelectedCategory(category.strCategory)
                                }
                            >
                                <Tag
                                    type="category"
                                    content={category.strCategory}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            {filteredRecipes.data && (
                <div>
                    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                        {data.map((recipe: FetchedRecipe) => {
                            return (
                                <div
                                    className="mb-5 border-white rounded-lg shadow-3xl md:max-w-[340px] lg:max-w-[300px] xl:max-w-[285px] relative hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer"
                                    key={recipe.idMeal}
                                    onClick={() =>
                                        navigate('/result', {
                                            state: recipe.idMeal,
                                        })
                                    }
                                >
                                    <img
                                        src={recipe.strMealThumb}
                                        alt={recipe.strMeal}
                                        className="max-w-full max-h-xs rounded-lg opacity-80"
                                    />
                                    <div className="p-4 absolute bottom-0 left-0">
                                        <p className="font-body1_font text-2xl text-ellipsis drop-shadow-[2.5px_2.5px_0.5px_rgba(255,255,255,0.8)]">
                                            {recipe.strMeal.length >= 20
                                                ? recipe.strMeal.slice(0, 16) +
                                                  ' ...'
                                                : recipe.strMeal}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {filteredRecipes.data.length > itemCount && (
                        <div>
                            <button
                                type="button"
                                className="p-2 mt-2 border-2 border-orange-900 rounded-lg 
                                    bg-orange-500 hover:bg-white text-orange-900
                                    w-full lg:text-xl"
                                onClick={() => setItemCount(itemCount + 10)}
                            >
                                See More
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Category;
