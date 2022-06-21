export async function fetchRandomRecipe(): Promise<T> {
    // const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
    // return response.json();
    // fetch('www.themealdb.com/api/json/v1/1/random.php', {
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //     })
    //     .then(res => res.json())
    // fetch('www.themealdb.com/api/json/v1/1/random.php')
    //     .then(function(response) {
    //         response.json()
    //         .then(function(data) {
    //             console.log(data);
    //         });
    //     })
    // fetch('www.themealdb.com/api/json/v1/1/random.php')
    //             .then((response) => {return response.json})
    // console.log(res);
    return fetch('www.themealdb.com/api/json/v1/1/random.php')
            .then(response => {
                return response.json<T>();
            })
    // const res = await fetch(`www.themealdb.com/api/json/v1/1/random.php`);
    // console.log(res.body);
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