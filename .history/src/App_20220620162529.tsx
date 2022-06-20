import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Recipe from './pages/recipe/recipe';
import Search from './pages/search/search';

function App() {
  console.log(React);
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/search' element={
          <Search />
        } />
        <Route path='/recipe' element={
          <Recipe />
        } />
      </Routes>
    </>
  );  
}

export default App;