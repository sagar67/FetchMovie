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
      });
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  function renderMoviesList({ item }) {
    const movies = {
      id: item.id,
      title: item.title,
      releaseYear: item.releaseYear,
    };

    return <MoviesList movies={movies} />;
  }

  return (
    <View>
      <Text style={styles.userId}>{user}</Text>
      <FlatList
        data={fetchMovies}
        renderItem={renderMoviesList}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

export default FetchedMovies;

const styles = StyleSheet.create({
  userId: {
    marginTop: 15,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});
