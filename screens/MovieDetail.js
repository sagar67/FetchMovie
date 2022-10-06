import { Image, StyleSheet, Text, View } from "react-native";

const DUMMY_DATA = [
  {
    id: "1",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTyKv-qQ7mhsmCoiLZaqk_DONgt7lZqJA2g&usqp=CAU",
    description:
      "Star Wars is an American epic space-opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.",
  },
  {
    id: "2",
    poster:
      "https://rukminim1.flixcart.com/image/416/416/kzygpzk0/poster/q/7/u/medium-movie-back-to-the-future-poster-poster-print-on-13x19-original-imagbukjgrwhrmgp.jpeg?q=70",
    description:
      "Back to the Future is a 1985 American science fiction film directed by Robert Zemeckis, and written by Zemeckis and Bob Gale. It stars Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, and Thomas F. Wilson. Set in 1985, the story follows Marty McFly (Fox), a teenager accidentally sent back to 1955 in a time-traveling DeLorean automobile built by his eccentric scientist friend Emmett 'DOC' Brown (Lloyd). While in the past, Marty inadvertently prevents his future parents from falling in love—threatening his existence—and is forced to reconcile the pair and somehow get back to the future.",
  },
  {
    id: "3",
    poster:
      "https://play-lh.googleusercontent.com/Gt0HAHRP-ZZ7z8h4W_veBvBw0nYMnMFizUoyCIKZ3-VtXcZmFcsHrzYQBkWqf-AJ5KDf=w240-h480-rw",
    description:
      'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It is the first installment in The Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.',
  },
  {
    id: "4",
    poster: "https://m.media-amazon.com/images/I/51Qx9c4ppzL._AC_SY450_.jpg",
    description:
      "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another persons idea into a targets subconscious. The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.",
  },
  {
    id: "5",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkFbqDKsahii5tBaeez_PaOzCQxn8hetvug&usqp=CAU",
    description:
      "Interstellar is a 2014 epic science fiction film co-written, directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.Brothers Christopher and Jonathan Nolan wrote the screenplay, which had its origins in a script Jonathan developed in 2007. Christopher produced Interstellar with his wife, Emma Thomas, through their production company Syncopy, and with Lynda Obst through Lynda Obst Productions. Caltech theoretical physicist and 2017 Nobel laureate in Physics Kip Thorne was an executive producer, acted as a scientific consultant, and wrote a tie-in book",
  },
];

function MovieDetail({ route }) {
  const movieItemId = route.params.movieId;

  const movie = DUMMY_DATA.find((movie) => {
    return movie.id === movieItemId;
  });

  return (
    <View style={styles.rootContainer}>
      <Image style={styles.imageContainer} source={{ uri: movie.poster }} />
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );
}

export default MovieDetail;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 8,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    margin: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    backgroundColor:'#d9b99b',
    borderRadius:5,    
    padding:7,
  },
});
