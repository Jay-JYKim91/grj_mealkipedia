import React from 'react';
import { Route, Routes, NavigateFunction, useNavigate } from 'react-router-dom';
import Home from './page/Home';
import Result from './page/Result';
import Search from './page/Search';

const App: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const navigateHome = () => {
      navigate('/');
  }

  return (
    <div className="app">
      <header 
          className="px-6 md:px-9 lg:px-12 py-2
                    shadow-md bg-gray-50">
          <div className="max-w-2xl m-auto flex">
            <img src='/logo.png' alt="logo" width="160" 
              className="m-auto lg:m-0"
              onClick={navigateHome} />
          </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='search' element={
            <Search  />
          } />
          <Route path='result' element={
            <Result />
          } />
        </Routes>
      </main>
      <footer className="flex flex-col items-center justify-center px-12 py-4 bg-gray-400">
          <img src="/logo.png" alt="logo" width="100" className="mb-2"/>
          <p className="font-body2_font">Developed by Juyeon Kim</p>
          <p>Using <a href="https://www.themealdb.com/">TheMealDB</a></p>
      </footer>
    </div>
  );  
}

export default App;