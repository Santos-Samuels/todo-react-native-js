import { Text, View, StyleSheet } from "react-native"

const TodoItem = (props) => {
  return (
    <View style={styles.item}>
      <Text>{props.description}</Text>
      <Text style={styles.trashButton}>Trash</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 20,
    borderRadius: 10,
  },

  trashButton: {
    color: 'red',
  }
})

export default TodoItem