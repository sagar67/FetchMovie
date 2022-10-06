import axios from "axios";

export async function MoviesFetched() {
  const response = await axios.get("https://reactnative.dev/movies.json")

//   const movies = res.data.movies.map((movie)=>{
//          return {
//             id: movie.id,
//             title:movie.title,
//             releaseYear:movie.releaseYear,
//          }
//   })

  const movies = [];

  for (const key in response.data) {
    const moviesObj = {
      key: response.data.id,
      id: response.data.id,
      title: response.data.title,
      releaseYear: response.data.releaseYear,
    };
    movies.push(moviesObj);
  }

  console.log("*** Fetch movies", movies);

  return movies;
}
