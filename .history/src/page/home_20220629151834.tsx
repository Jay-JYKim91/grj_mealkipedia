import React from 'react';
import TodaysRecipe from '../component/TodaysRecipe';
import SearchBar from '../component/SearchBar';

const Home: React.FC = () => {
    return (
        <>
            <div 
                className="px-6 md:px-9 lg:px-12 py-40 bg-cover bg-[url('images/main_background.jpg')] 
                            text-center lg:text-right">
                <h1 
                    className="font-body1_font text-5xl lg:text-7xl mb-8 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                        Find a Recipe
                </h1>
                <SearchBar 
                    divStyle="flex justify-center lg:justify-end" 
                    inputStyle="p-2 lg:p-4 w-full text-2xl font-body1_font rounded-l-lg border-2 border-gray-300"
                    imageStyle="max-h-[40px]"
                    buttonStyle="p-2 bg-gray-300 rounded-r-lg" />
            </div>
            <TodaysRecipe divStyle="px-6 md:px-9 lg:px-12 py-6 lg:py-12" />
        </>
    )
};

export default Home;