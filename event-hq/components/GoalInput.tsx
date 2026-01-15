import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({
  onAddGoal,
  onCancel,
  visible,
}: {
  onAddGoal: (enteredGoal: string) => void;
  onCancel: () => void;
  visible: boolean;
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
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            color="#f31282"
            onPress={() => {
              setEnteredGoal("");
              onCancel();
            }}
          />
          <Button title="Add Goal" onPress={handleAddGoal} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#e4d0ff",
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
