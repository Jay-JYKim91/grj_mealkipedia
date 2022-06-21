import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import MealDBFecth from './services/mealDB';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 

const MealDB = new MealDBFecth();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App MealDB: MealDBFetch={MealDB} />
    </BrowserRouter>
  </React.StrictMode>
);