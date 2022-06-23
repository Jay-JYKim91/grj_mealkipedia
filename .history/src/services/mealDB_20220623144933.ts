export type RecipeType = {
    id: string,
    title: string,
    imageURL: string,
    area: string,
    tags?: string[],
    ingredients?: string[],
    instruction: string
}

export async function fetchRandomRecipe() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    if (res.ok) {
        let data = await res.json();

        let ingredients: string[] = [];
        for (let i = 1; i < 21; i++) {
            let processed = data.meals[0][`strIngredient${i}`];
            if (processed && processed !== "") {
                ingredients.push(data.meals[0][`strIngredient${i}`]);
            }
        }

        let tags: string[] = [];
        if (data.meals[0]['strTags']) {
            tags = data.meals[0]['strTags'].split(',');
        }

        const recipe: RecipeType = {
            id: data.meals[0].idMeal,
            title: data.meals[0].strMeal,
            imageURL: data.meals[0].strMealThumb,
            area: data.meals[0].strArea,
            tags: tags,
            // ingredients: ingredients,
            instruction: data.meals[0].strInstructions
        }
        
        return recipe;
    } else {
        return;
    }
}

export async function searchRecipe(query: string) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    if (res.ok) {
        let data = await res.json();
        console.log(data);
        
        // let ingredients: string[] = [];
        // for (let i = 1; i < 21; i++) {
        //     let processed = data.meals[0][`strIngredient${i}`];
        //     if (processed && processed !== "") {
        //         ingredients.push(data.meals[0][`strIngredient${i}`]);
        //     }
        // }

        // let tags: string[] = [];
        // if (data.meals[0]['strTags']) {
        //     tags = data.meals[0]['strTags'].split(',');
        // }

        // const recipe: RecipeType = {
        //     id: data.meals[0].idMeal,
        //     title: data.meals[0].strMeal,
        //     imageURL: data.meals[0].strMealThumb,
        //     area: data.meals[0].strArea,
        //     tags: tags,
        //     // ingredients: ingredients,
        //     instruction: data.meals[0].strInstructions
        // }
        
        // return recipe;
    } else {
        return;
    }
}
// class MealDBFetch {
//     async randomRecipe() {
        
//     }
//     // async search(query) {
//     //     const response = await fetch(
//     //         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
//     //         this.getRequestOptions
//     //     );
//     //     const result = await response.json();
//     //     return result.items.map(item => ({ ...item, id: item.id.videoId }));
//     // }
// }

// export default MealDBFetch;