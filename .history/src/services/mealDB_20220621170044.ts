// interface props {
    
// }

class MealDBFetch {
    async randomRecipe() {
        const response: Response = await fetch(
            'www.themealdb.com/api/json/v1/1/random.php'
        );
        const result: JSON = await response.json();
        return result;
    }
    // async search(query) {
    //     const response = await fetch(
    //         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //         this.getRequestOptions
    //     );
    //     const result = await response.json();
    //     return result.items.map(item => ({ ...item, id: item.id.videoId }));
    // }
}

export default MealDBFetch;