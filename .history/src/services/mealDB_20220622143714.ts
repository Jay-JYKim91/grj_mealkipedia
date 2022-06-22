export type RecipeType = {
    title: string,
    imageURL: string,
    area: string,
    tags?: string[],
    ingredients: string[]
}

export async function fetchRandomRecipe() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    if (res.ok) {
        let data = await res.json();
        let ingredients: string[] = [];
        for (let i = 1; i < 21; i++) {
            let processed = data.meals[0][`strIngredient${i}`];
            if (processed && processed != "") {
                ingredients.push(data.meals[0][`strIngredient${i}`]);
            }
        }
        let tags: string[] = [];
        if (data.meals[0]['strTags']) {
            tags = data.meals[0]['strTags'].split(',');
        }

        const recipe: RecipeType = {
            title: data.meals[0].strMeal,
            imageURL: data.meals[0].strMealThumb,
            area: data.meals[0].strArea,
            tags: tags,
            ingredients: ingredients
        }
        return recipe;
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