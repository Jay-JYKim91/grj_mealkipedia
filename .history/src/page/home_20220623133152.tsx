import React from 'react';
import RecommendationRecipe from '../component/recommendation_recipe';
import { RecipeType } from '../services/mealDB';

const Home: React.FC<RecipeType> = ({ title, imageURL, area, instruction, tags}) => {
    
    return (
        <>
            <div className="px-6 md:px-9 lg:px-12 py-40 bg-cover bg-[url('images/main_background.jpg')] text-center lg:text-right">
                <h1 
                    className="font-body1_font text-5xl lg:text-7xl mb-8 drop-shadow-lg">
                        Find a Recipe
                </h1>
                <div className="flex justify-center lg:justify-end">
                    <input type="search" 
                        className="p-2 lg:p-4 text-2xl font-body1_font rounded-l-lg border-2 border-gray-300"
                    />
                    <button className="p-4 bg-gray-300 rounded-r-lg">
                        <img src="./search.png" alt="search" />
                    </button>
                </div>
            </div>
            <RecommendationRecipe 
                title={title} imageURL={imageURL} area={area}
                instruction={instruction} tags={tags} />
        </>
    )
};

export default Home;