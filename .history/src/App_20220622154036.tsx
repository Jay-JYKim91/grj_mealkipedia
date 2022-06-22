import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './page/home';
import Recipe from './page/recipe';
import Search from './page/search';
import * as apiMeals from './services/mealDB';

const App: React.FC = () => {
  let defaultRecipe: apiMeals.RecipeType;

  useEffect(() => {
      apiMeals.fetchRandomRecipe()
          .then((data) => {
              data = data! as apiMeals.RecipeType;
              
              defaultRecipe = {
                    title: data.title,
                    imageURL: data.imageURL,
                    area: data.area,
                    tags: data.tags,
                    ingredients: data.ingredients
                }
          })
  }, [])
  console.log(defaultRecipe);
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={
            <Home recipe={defaultRecipe} />
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