import axios from 'axios';

export type RecipeType = {
    id: string,
    title: string,
    imageURL: string,
    area: string,
    tags?: string[],
    ingredients?: string[],
    instruction: string
}

export async function getDefaultRecipe() {
    const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
    );
        
    return data["meals"][0];;
}

export async function searchRecipeByQuery(query: string) {
    const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
        
    return data["meals"];
}

export async function searchRecipeById(id: string) {
    const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
        
    return data["meals"][0];
}