import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";

function MoviesList({ movies }) {
//   console.log("*** MoviesList title", movies);

//   function renderMoviesItems(itemData){
//      const item = itemData.item;
     
//      const moviesItems = {
//         id: item.id,
//         title: item.title,
//         releaseYear : item.releaseYear,
//      }
//      return
//   }

//   return <FlatList 
//   data={movies}
//   renderItem={renderMoviesItems}
//   keyExtractor={(item)=>{item.id}}
//   />

const navigation = useNavigation();

function MovieDetailHandler(){
    navigation.navigate('MovieDetail',{
        movieId: movies.id
    })
}

return <Pressable onPress={MovieDetailHandler} 
style={({pressed})=>{pressed && styles.pressed}}>

<View style={styles.moviesCotainer}>
    <View style={styles.movieCotainer}>
    <Text>{movies.title}</Text>
    <Text>{movies.releaseYear}</Text>
    </View>
</View>
</Pressable>
}

export default MoviesList;

const styles = StyleSheet.create({
     moviesCotainer:{
        flex:1,
        justifyContent:'center',
        borderWidth:2,
        borderRadius:3,
        margin:10,
        padding:8,
        backgroundColor:'#F27FE6'
     },
     movieCotainer:{
        flexDirection:'row',
        justifyContent:'space-between',
     },
     pressed:{
        opacity:0.75,
     }
});
