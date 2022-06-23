import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './page/home';
import Recipe from './page/recipe';
import Search from './page/search';
import * as apiMeals from './services/mealDB';

const App: React.FC = () => {
  const [recipe, setRecipe] = useState<apiMeals.RecipeType>
    ({
        title: '',
        imageURL: '',
        area: '',
        tags: [],
        instruction: ''
    });

    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then((data) => {
                data = data! as apiMeals.RecipeType;
                
                setRecipe({
                    title: data.title,
                    imageURL: data.imageURL,
                    area: data.area,
                    tags: data.tags,
                    instruction: data.instruction
                })
            })
    }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={
            <Home 
              title={recipe.title} imageURL={recipe.imageURL} area={recipe.area}
              tags={recipe.tags} instruction={recipe.instruction} />
          } />
          <Route path='search' element={
            <Search />
          } />
          <Route path='recipe' element={
            <Recipe />
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );  
}

export default App;