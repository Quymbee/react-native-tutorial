import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({
  item,
  onDelete,
}: {
  item: { text: string; id: string };
  onDelete: (id: string) => void;
}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDelete(item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>{" "}
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "pink",
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
    padding: 8,
  },
  pressedItem: {
    borderRadius: 6,
    backgroundColor: "red",
    opacity: 0.5,
  },
});
