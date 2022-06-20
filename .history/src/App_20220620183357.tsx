import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './pages/home/home';
import Recipe from './pages/recipe/recipe';
import Search from './pages/search/search';

function App() {
  console.log(React);
  return (
    <>
      <img src="/logo.png" alt=""/>
      <Header />
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
      <Footer />
    </>
  );  
}

export default App;