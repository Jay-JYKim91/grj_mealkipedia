import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import MealDB from './services/mealDB';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 

const MealDB = new MealDB();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App MealDB={MealDB} />
    </BrowserRouter>
  </React.StrictMode>
);