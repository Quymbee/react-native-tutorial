import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  function addGoalHandler(enteredGoal: string) {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        {/* Using FlatList for better performance with large lists over <ScrollView> */}
        <FlatList
          data={goals}
          alwaysBounceVertical={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <GoalItem item={item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
