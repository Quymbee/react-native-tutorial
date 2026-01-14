import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <Text style={styles.dummyText}>Hello</Text>
      <Button title="Tap me"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
    margin: 16, borderWidth: 1, borderColor: 'green', padding: 16
  }
});