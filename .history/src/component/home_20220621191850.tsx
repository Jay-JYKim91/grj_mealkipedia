import React, { useEffect, useState } from 'react';
import * as apiMeals from '../services/mealDB';

type recipe = {
    title: string,
    imageURL: string
}

const Home: React.FC = () => {
    // const [recipe, setRecipe] = useState([

    // ])
    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then(data => console.log(data))
    })

    return (
        <>
            <div className="px-12 py-40 bg-cover bg-[url('images/main_background.jpg')] text-right">
                <h1 
                    className="font-body1_font text-7xl mb-8 drop-shadow-lg">
                        Find a Recipe
                </h1>
                <div className="flex justify-end">
                    <input type="search" 
                        className="p-4 text-3xl font-body1_font rounded-l-lg border-2 border-gray-300"
                    />
                    <button className="p-4 bg-gray-300 rounded-r-lg">
                        <img src="./search.png" alt="search" />
                    </button>
                </div>
            </div>
            <div className="px-12 py-12">
                <h1 className="font-body1_font text-4xl">Today's recipe</h1>
                <div className="flex">
                    <img src="https://picsum.photos/250/250" alt="today's recipe"
                        className="pr-4" />
                    <h2>Title</h2>
                    <p>ingredients</p>
                </div>
            </div>
        </>
    )
};

export default Home;