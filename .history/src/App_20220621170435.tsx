import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './component/home';
import Recipe from './component/recipe';
import Search from './component/search';
import MealDBFetch from './services/mealDB';

const App: React.FC = () => {
  const recommendation: Promise<JSON> = async () => {
    const meal = new MealDBFetch();
    return await meal.randomRecipe();

  }
  console.log(recommendation);

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