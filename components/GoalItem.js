import React from "react";
import { StyleSheet, Text } from "react-native";

export const GoalItem = ({ item }) => {
  return <Text style={styles.goalItem}>{item}</Text>;
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
