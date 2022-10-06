import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#d9b99b",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    width: "100%",
  },
  text: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
