import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './page/home';
import Recipe from './page/recipe';
import Search from './page/search';
import * as apiMeals from './services/mealDB'

const App: React.FC = () => {
  useEffect(() => {
      apiMeals.fetchRandomRecipe()
          .then((data) => {
              data = data! as apiMeals.RecipeType;
              console.log(data);
              // setRecipe({
              //     title: data.title,
              //     imageURL: data.imageURL,
              //     area: data.area,
              //     tags: data.tags,
              //     ingredients: data.ingredients
              // })
          })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={
            <Home />
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