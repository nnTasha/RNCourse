import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export const GoalItem = ({ item, onDeteleItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#1c0d46" }}
        onPress={() => onDeteleItem(item.id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressed: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
