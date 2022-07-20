import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Error from '../component/Error';
import Loading from '../component/Loading';
import Tag from '../component/Tag';
import * as apiMeals from '../services/mealDB';

type FetchedCategory = {
    strCategory: string;
};

type FetchedRecipe = {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
};

const Category: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('beef');
    const [itemCount, setItemCount] = useState(10);

    const categories = useQuery('getCategories', () =>
        apiMeals.getCategories()
    );

    const filteredRecipes = useQuery('getFilteredRecipes', () =>
        apiMeals.getFilteredRecipes(selectedCategory)
    );

    useEffect(() => {
        filteredRecipes.refetch();
    }, [selectedCategory]);

    if (categories.isLoading || filteredRecipes.isLoading) {
        return <Loading />;
    }

    if (categories.isError || filteredRecipes.isError) {
        return <Error />;
    }

    const [data, setData] = useState(filteredRecipes.data);

    if (data.length > itemCount) {
        setData(filteredRecipes.data.slice(0, itemCount));
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
                                    className="mb-5 border-white rounded-lg shadow-3xl md:max-w-[340px] lg:max-w-[300px] xl:max-w-[285px] relative hover:translate-x-1 hover:translate-y-1"
                                    key={recipe.idMeal}
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
                </div>
            )}
        </div>
    );
};

export default Category;
