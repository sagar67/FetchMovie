import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MoviesList from "../components/MoviesList";

function FetchedMovies() {
  const [fetchMovies, setFetchMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.user.username);

  useEffect(() => {
    console.log("*** FetchedMovies useEffect Fetching_Movies");
    setIsLoading(true);
    fetch("https://reactnative.dev/movies.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const fetchedMovies = data.movies.map((movieData) => {
          return {
            id: movieData.id,
            title: movieData.title,
            releaseYear: movieData.releaseYear,
          };
        });
        setFetchMovies(fetchedMovies);
        setIsLoading(false);
        // console.log("FetchedMovies useEffect fetchMovies", fetchedMovies);
      });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  //   console.log("*** FetchedMovies fetchMovies_State", fetchMovies);

  //   useEffect(() => {
  //     async function getMovies() {
  //       const response = await axios.get("https://reactnative.dev/movies.json");

  //       const movies = response.data.movies.map((movie)=>{
  //         return {
  //             id: movie.id,
  //             title:movie.title,
  //             releaseYear:movie.releaseYear,
  //         }
  //       }
  //       )
  //          setFetchMovies(movies);
  //     }
  //     getMovies();
  //   });

  //   useEffect(() => {
  //     async function getMovies() {
  //       const movies = await MoviesFetched();
  //       setFetchMovies(movies);
  //     }
  //     getMovies();
  //   }, []);

  function renderMoviesList(itemData) {
    const item = itemData.item;
    const movies = {
      id: item.id,
      title: item.title,
      releaseYear: item.releaseYear,
    };
  // function renderMoviesList({item}) {
  //   const movies = {
  //     id: item.id,
  //     title: item.title,
  //     releaseYear: item.releaseYear,
  //   };

    // console.log('*** FetchedMovies renderMoviesList movies',movies)
    return <MoviesList movies={movies} />;
  }

  return (
    //   <MoviesList movies={fetchMovies} />
    <View>
      <Text style={styles.userId}>{user}</Text>
      <FlatList
        data={fetchMovies}
        renderItem={renderMoviesList}
        keyExtractor={(item, index) => {
          item.id;
        }}
      />
    </View>
  );
}

export default FetchedMovies;

const styles = StyleSheet.create({
    userId:{
        marginTop:15,
        fontWeight:'bold',
        textAlign:'center',
        margin:10,
    }
})