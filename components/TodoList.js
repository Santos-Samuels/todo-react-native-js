import { Text, FlatList, StyleSheet } from "react-native"
import { TodoItem } from "./"

const TodoList = (props) => {
  
  if (props.todos.length === 0) return <Text style={styles.empetyMessage}>Nothing to do!</Text>

  return (
    <FlatList
        data={props.todos}
        renderItem={dataItem => <TodoItem description={dataItem.item.description} />}
        keyExtractor={todo => todo.id}
      />
  )
}

const styles = StyleSheet.create({
  empetyMessage: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    color: '#B2B2B2',
    fontWeight: '600'
  }
})

export default TodoList