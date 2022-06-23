import React from 'react';
import DefaultRecipe from '../component/DefaultRecipe';
import SearchBar from '../component/SearchBar';
import { RecipeType } from '../services/mealDB';

const Home: React.FC<RecipeType> = ({ onSearch, title, imageURL, area, instruction, tags, id }) => {
    return (
        <>
            <div className="px-6 md:px-9 lg:px-12 py-40 bg-cover bg-[url('images/main_background.jpg')] text-center lg:text-right">
                <h1 
                    className="font-body1_font text-5xl lg:text-7xl mb-8 drop-shadow-lg">
                        Find a Recipe
                </h1>
                <SearchBar 
                    onSearch={onSearch}
                    divStyle="flex justify-center lg:justify-end" 
                    inputStyle="p-2 lg:p-4 text-2xl font-body1_font rounded-l-lg border-2 border-gray-300"
                    buttonStyle="p-2 bg-gray-300 rounded-r-lg" />
            </div>
            <DefaultRecipe 
                title={title} imageURL={imageURL} area={area}
                instruction={instruction} tags={tags} id={id} />
        </>
    )
};

export default Home;