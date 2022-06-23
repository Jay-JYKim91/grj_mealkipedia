import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './page/home';
import Recipe from './page/recipe';
import Search from './page/search';
import * as apiMeals from './services/mealDB';

const App: React.FC = () => {
    const [recipe, setRecipe] = useState<apiMeals.RecipeType>({
          id: '',
          title: '',
          imageURL: '',
          area: '',
          tags: [],
          instruction: ''
    });
    
    const onSearch = (query: string): [] => {
      let recipes: [] = [];

      apiMeals.searchRecipe(query).then((data) =>{
        recipes = data;
      })

      return recipes;
    } 

    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then((data) => {
                data = data! as apiMeals.RecipeType;
                
                setRecipe({
                    id: data.id,
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
              tags={recipe.tags} instruction={recipe.instruction} id={recipe.id}
              onSearch={onSearch} />
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