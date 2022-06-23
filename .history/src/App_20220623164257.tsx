import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './page/home';
import Recipe from './page/recipe';
import Search from './page/search';
import * as apiMeals from './services/mealDB';

const App: React.FC = () => {
    const [defaultRecipe, setDefaultRecipe] = useState<apiMeals.RecipeType>({
          id: '',
          title: '',
          imageURL: '',
          area: '',
          tags: [],
          instruction: ''
    });

    const [recipes, setRecipes] = useState([]);
    
    const onSearch = (query: string): [] => {
      apiMeals.searchRecipe(query).then((data) =>{
        setRecipes(data);
      })

      return recipes;
    } 

    useEffect(() => {
        apiMeals.fetchRandomRecipe()
            .then((data) => {
                data = data! as apiMeals.RecipeType;
                
                setDefaultRecipe({
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
              title={defaultRecipe.title} imageURL={defaultRecipe.imageURL} area={defaultRecipe.area}
              tags={defaultRecipe.tags} instruction={defaultRecipe.instruction} id={defaultRecipe.id}
              onSearch={onSearch} />
          } />
          <Route path='search' element={
            <Search onSearch={onSearch} />
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