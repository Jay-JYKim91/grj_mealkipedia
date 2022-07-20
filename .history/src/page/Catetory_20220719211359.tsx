import React from 'react';
import { useQuery } from 'react-query';
import * as apiMeals from '../services/mealDB';

const Catetory: React.FC = () => {
    const { isLoading, isError, data, refetch } = useQuery(
        'searchRecipeByQuery',
        () => apiMeals.getCategories()
    );

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <div className="max-w-7xl m-auto my-6 px-6 md:px-9 lg:px-12">
            <p>catetory</p>
        </div>
    );
};

export default Catetory;
