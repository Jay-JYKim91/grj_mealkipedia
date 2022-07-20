import React from 'react';
import { useQuery } from 'react-query';
import Error from '../component/Error';
import Loading from '../component/Loading';
import Tag from '../component/Tag';
import * as apiMeals from '../services/mealDB';

type Category = {
    strCategory: string;
};
const Catetory: React.FC = () => {
    const { isLoading, isError, data } = useQuery('getCategories', () =>
        apiMeals.getCategories()
    );

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    const handleClick = (category: string) => {
        const filtered = useQuery('getFilteredRecipes', () =>
            apiMeals.getFilteredRecipes(category)
        );
        console.log(filtered.data);
    };

    return (
        <div className="max-w-7xl m-auto my-6 px-6 md:px-9 lg:px-12">
            <div className="overflow-x-scroll">
                <ul className="flex ">
                    {data.map((category: Category) => {
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

export default Catetory;
