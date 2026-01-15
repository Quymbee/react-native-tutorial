import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput({
  onAddGoal,
}: {
  onAddGoal: (enteredGoal: string) => void;
}) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(e: string) {
    setEnteredGoal(e);
  }

  function handleAddGoal() {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
