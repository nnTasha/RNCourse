import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";
import React from "react";
import { GoalInput } from "./components/GoalInput";

export const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredText) => {
    if (enteredText.trim().length === 0) return;
    setCourseGoals((currentGoals) => [...currentGoals, enteredText]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => <GoalItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: { flex: 4 },
});
