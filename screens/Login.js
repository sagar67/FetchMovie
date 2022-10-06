import { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { usernameActions } from "../store/username";
import CustomButton from "../UI/CustomButton";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function usernameHandler(enteredInput) {
    setUsername(enteredInput);
  }

  function passwordHandler(enteredInput) {
    setPassword(enteredInput);
  }

  const submitHandler = () => {
    if (isNaN(username)) {
      return Alert.alert(
        "Invalid Username",
        "Username should be a 'digit' less than 10"
      );
    }
    if (username.trim().length < 10) {
      return Alert.alert(
        "Invalid Username",
        "Entered less than 10 digits number"
      );
    }
    if (password.trim().length < 6) {
      return Alert.alert("Invalid Password", "Password should be more than 6");
    }

    setUsername("");
    setPassword("");
    navigation.navigate("Movies");
    dispatch(usernameActions.username(username));
  };
  return (
    <View style={styles.rootContainer}>
        <Text style={styles.textLabel}>Username</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          onChangeText={usernameHandler}
          value={username}
          maxLength={10}
          placeholder="Enter 10 digits as a username"
          placeholderTextColor="white"
        />
        <Text style={styles.textLabel}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={passwordHandler}
          value={password}
          placeholder="Enter password less than 6"
          placeholderTextColor="white"
          secureTextEntry={true}
          autoCorrect={false}
        />
      <CustomButton onPress={submitHandler} >Login</CustomButton>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50,
    marginHorizontal: 20,
  },
  textLabel: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  textInput: {
    backgroundColor: "grey",
    marginBottom: 8,
    borderRadius: 6,
    padding: 10,
    color: "white",
  },
});