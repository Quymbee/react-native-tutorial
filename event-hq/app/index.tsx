import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  function goalInputHandler(e: string) {
    setEnteredGoal(e);
  }

  function addGoalHandler() {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
        {/* Using FlatList for better performance with large lists over <ScrollView> */}
        <FlatList
          data={goals}
          alwaysBounceVertical={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item.text}</Text>
              </View>
            );
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    flex: 1,
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "pink",
    padding: 8,
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
  },
});
