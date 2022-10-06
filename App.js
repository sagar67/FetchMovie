import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text } from "react-native";
import Login from "./screens/Login";
import FetchedMovies from "./screens/FetchedMovies";
import MovieDetail from "./screens/MovieDetail";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#d9b99b" },
          headerTintColor: "black",
          contentStyle: { backgroundColor: "#fff0db" },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Movies" component={FetchedMovies} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
