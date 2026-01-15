import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);
  const [addModal, setAddModal] = useState(false);

  function handleAddModal(visible: boolean) {
    setAddModal(visible);
  }
  function addGoalHandler(enteredGoal: string) {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setAddModal(false);
  }

  function deleteGoalHandler(id: string) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" onPress={() => handleAddModal(true)} />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={() => handleAddModal(false)}
          visible={addModal}
        />
        <View style={styles.goalsContainer}>
          <Text style={styles.title}>List of Goals</Text>
          {/* Using FlatList for better performance with large lists over <ScrollView> */}
          <FlatList
            data={goals}
            alwaysBounceVertical={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <GoalItem item={item} onDelete={deleteGoalHandler} />;
            }}
          />
        </View>
      </View>
    </>
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
  title: {
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    paddingBottom: 8,
    marginTop: 32,
    marginBottom: 16,
  },
});
