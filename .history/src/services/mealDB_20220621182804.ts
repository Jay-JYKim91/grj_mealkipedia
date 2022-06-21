export async function fetchRandomRecipe() {
    // const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
    // return response.json();
    fetch('www.themealdb.com/api/json/v1/1/random.php', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
        })
        .then(res => res.json())
    // fetch('www.themealdb.com/api/json/v1/1/random.php', {
    //     headers : { 
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //      }
    //     })
    //     .then(response => {
    //         console.log(response);
    //         return response;
    //     })
        // .then(data => {
        //     return data;
        // })
    // const response: Response = await fetch(
    //     'www.themealdb.com/api/json/v1/1/random.php'
    // );
    // const result= await response;
    // return result;
    // fetch('www.themealdb.com/api/json/v1/1/random.php')
    //     .then((response) => console.log(response.json));
        // )
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