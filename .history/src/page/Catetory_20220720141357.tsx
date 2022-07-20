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

    const categories = useQuery('getCategories', () =>
        apiMeals.getCategories()
    );

    const filteredRecipes = useQuery('getFilteredRecipes', () =>
        apiMeals.getFilteredRecipes(selectedCategory)
    );

    useEffect(() => {
        // if (selectedCategory !== 'beef') {
        filteredRecipes.refetch();
        // }
    }, [selectedCategory]);

    if (categories.isLoading) {
        return <Loading />;
    }

    if (categories.isError) {
        return <Error />;
    }

    const handleClick = (category: string) => {
        setSelectedCategory(category);
    };

    console.log(filteredRecipes.data);

    return (
        <div className="max-w-7xl m-auto my-6 px-6 md:px-9 lg:px-12">
            <div className="overflow-x-scroll">
                <ul className="flex ">
                    {categories.data.map((category: FetchedCategory) => {
                        return (
                            <li
                                key={category.strCategory}
                                className="my-2 cursor-pointer"
                                role="presentation"
                                onClick={() =>
                                    handleClick(category.strCategory)
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
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                {filteredRecipes.data &&
                    filteredRecipes.data.map((recipe: FetchedRecipe) => {
                        return (
                            <div
                                className="mb-5 border-white rounded-lg shadow-3xl md:max-w-[340px] lg:max-w-[300px] xl:max-w-[285px] relative hover:translate-x-1 hover:translate-y-1"
                                // key={}
                            >
                                <img
                                    src={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                    className="max-w-full max-h-xs rounded-[8px_8px_0px_0px]"
                                />
                                <div className="p-4">
                                    <p className="font-body1_font text-2xl pb-12">
                                        {recipe.strMeal}
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
        </div>
    );
};

export default Category;
