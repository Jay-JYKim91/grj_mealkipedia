// import Recipe from '../component/recipe';

export type Recipe = {
    category: string;
    title: string;
    ingredient: string[];
    imageURL: string;
}
export async function fetchRandomRecipe() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    if (res.ok) {
        let data = await res.json();
        // return data.meals[0].map((recipe: Recipe) => ({
        //     category: recipe.
        // })
        return data.meals[0];
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