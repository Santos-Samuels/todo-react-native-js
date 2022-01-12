import { Text, View, StyleSheet } from "react-native";
// import { Checkbox } from "react-native-elements";

const TodoItem = (props) => {
  const completedTodoStyle = props.todo.completed ? "line-through" : "none";

  return (
    <View style={styles.item}>
      {/* <Checkbox
        style={{
          textDecorationLine: completedTodoStyle,
          opacity: props.todo.completed ? 0.3 : 1.0,
        }}

        title={props.todo.description}
        checked={props.todo.completed}
        onPress={() => props.completeTodoHandler(props.todo.id)}
      /> */}
      <Text style={{textDecorationLine: completedTodoStyle, opacity: props.todo.completed ? 0.3 : 1.0}} onPress={() => props.completeTodoHandler(props.todo.id)} >{props.todo.description} </Text>
      <Text
        style={styles.trashButton}
        onPress={() => props.removeTodoHandler(props.todo.id)}
      >
        Trash
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 20,
    borderRadius: 10,
  },

  trashButton: {
    color: "red",
  },
});

export default TodoItem;
