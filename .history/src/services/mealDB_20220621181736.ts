export async function fetchRandomRecipe() {
    // const response: Response = await fetch(
    //     'www.themealdb.com/api/json/v1/1/random.php'
    // );
    // const result= await response;
    // return result;
    fetch('www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => console.log(response));
        )
        // .then((data) => console.log(data))
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