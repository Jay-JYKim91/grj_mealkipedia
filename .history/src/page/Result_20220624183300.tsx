import React from 'react';
import { useLocation } from 'react-router-dom';
// import * as apiMeals from '../services/mealDB';

const Result: React.FC = () => {
    const { state } = useLocation();
    console.log(state);
    
    return (
        <h1>result</h1>
    )
}

export default Result;