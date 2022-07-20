import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Error from '../component/Error';
import Loading from '../component/Loading';
import Tag from '../component/Tag';
import * as apiMeals from '../services/mealDB';

type Category = {
    strCategory: string;
};
const Category: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('beef');

    const categories = useQuery('getCategories', () =>
        apiMeals.getCategories()
    );
    const filteredRecipes = useQuery('getFilteredRecipes', () =>
        apiMeals.getFilteredRecipes(selectedCategory)
    );

    if (categories.isLoading) {
        return <Loading />;
    }

    if (categories.isError) {
        return <Error />;
    }

    useEffect(() => {
        filteredRecipes.refetch();
    }, [selectedCategory]);

    const handleClick = (category: string) => {
        setSelectedCategory(category);
    };

    console.log(filteredRecipes.data);

    return (
        <div className="max-w-7xl m-auto my-6 px-6 md:px-9 lg:px-12">
            <div className="overflow-x-scroll">
                <ul className="flex ">
                    {categories.data.map((category: Category) => {
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
        </div>
    );
};

export default Category;
