import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Route, Routes, NavigateFunction, useNavigate } from 'react-router-dom';
import Home from './page/home';
import Recipe from './page/recipe';
import Search from './page/search';
import * as apiMeals from './services/mealDB';

const App: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }
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
      useQuery('getDefaultRecipe', () => apiMeals.getDefaultRecipe());
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
      <header 
          className="px-6 md:px-9 lg:px-12 py-2 shadow-md bg-gray-50">
          <img src='/logo.png' alt="logo" width="160" 
              className="m-auto lg:m-0"
              onClick={navigateHome} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <Home 
              title={defaultRecipe.title} imageURL={defaultRecipe.imageURL} area={defaultRecipe.area}
              tags={defaultRecipe.tags} instruction={defaultRecipe.instruction} id={defaultRecipe.id}
              onSearch={onSearch} />
          } />
          <Route path='search' element={
            <Search 
              onSearch={onSearch}
              title={defaultRecipe.title} imageURL={defaultRecipe.imageURL} area={defaultRecipe.area}
              tags={defaultRecipe.tags} instruction={defaultRecipe.instruction} id={defaultRecipe.id} />
          } />
          <Route path='recipe' element={
            <Recipe />
          } />
        </Routes>
      </main>
      <footer className="flex flex-col items-center justify-center px-12 py-4 bg-gray-400">
          <img src="/logo.png" alt="logo" width="100" className="mb-2"/>
          <p className="font-body2_font">Developed by Juyeon Kim</p>
          <p>Using <a href="https://www.themealdb.com/">TheMealDB</a></p>
      </footer>
    </>
  );  
}

export default App;