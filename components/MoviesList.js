import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";

function MoviesList({ movies }) {

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
        backgroundColor:'#d9b99b'
     },
     movieCotainer:{
        flexDirection:'row',
        justifyContent:'space-between',
     },
     pressed:{
        opacity:0.75,
     }
});
