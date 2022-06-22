export type RecipeType = {
    title: string,
    imageURL: string,
    area: string,
    tags?: string[],
    ingredients: string[]
}

export async function fetchRandomRecipe() {
    // const res = await 
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response)  => {
            return response.json();
        })
        .then((result) => {
            let ingredients: string[] = [];
            for (let i = 1; i < 21; i++) {
                let processed = result.meals[0][`strIngredient${i}`];
                if (processed && processed != "") {
                    ingredients.push(processed);
                }
            }
    
            let tags: string[] = [];
            if (result.meals[0]['strTags']) {
                tags = result.meals[0]['strTags'].split(',');
            }
    
            const recipe: RecipeType = {
                title: result.meals[0].strMeal,
                imageURL: result.meals[0].strMealThumb,
                area: result.meals[0].strArea,
                tags: tags,
                ingredients: ingredients
            }
            
            return recipe;
        })
        .catch((error) => {
            console.error(`mealDB error: ${error}`);
        })

    // if (res.ok) {
    //     let data = await response.json();

        
    // }
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