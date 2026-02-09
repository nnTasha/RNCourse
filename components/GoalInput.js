import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

export const GoalInput = ({ onAddGoal }) => {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          onAddGoal(enteredText);
          setEnteredText("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 54,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
