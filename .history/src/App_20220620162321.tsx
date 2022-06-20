import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  console.log(React);
  return (
    <>
    <Routes>
      <Route exact path='/' element={
        <Home />
      } />
      <Route exact path='/search' element={
        <Home />
      } />
      <Route exact path='/recipe' element={
        <Home />
      } />
      {/* <h1 className="text-3xl font-heading_font underline text-purple-500">
          Simple React Typescript Tailwind Sample
        </h1>
        <h1 className="text-3xl font-body1 underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1> */}
    </Routes>
      
    </>
  );  
}

export default App;