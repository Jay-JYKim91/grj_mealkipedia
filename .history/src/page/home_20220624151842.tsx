import React from 'react';
// import f from '../../public/'
// import TodaysRecipe from '../component/TodaysRecipe';
import SearchBar from '../component/SearchBar';
// import { RecipeType } from '../services/mealDB';

const Home: React.FC = () => {
    return (
        <>
            <div className="px-6 md:px-9 lg:px-12 py-40 bg-cover bg-[url('logo.png')] text-center lg:text-right">
                <h1 
                    className="font-body1_font text-5xl lg:text-7xl mb-8 drop-shadow-lg">
                        Find a Recipe
                </h1>
                <SearchBar 
                    divStyle="flex justify-center lg:justify-end" 
                    inputStyle="p-2 lg:p-4 text-2xl font-body1_font rounded-l-lg border-2 border-gray-300"
                    buttonStyle="p-2 bg-gray-300 rounded-r-lg" />
            </div>
            {/* <TodaysRecipe /> */}
        </>
    )
};

export default Home;