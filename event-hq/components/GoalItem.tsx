import { View, Text, StyleSheet } from "react-native";

function GoalItem({ item }: { item: { text: string; id: string } }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
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
