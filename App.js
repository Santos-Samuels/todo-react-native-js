import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TodoForm, TodoList } from "./components"

export default function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    setTodoList((prevList) => [todo, ...prevList]);
  };

  // const removeTodo = (id) => {
  //   const updatedList = todoList.filter((todo) => todo.id === id);
  //   setTodoList(updatedList);
  // };

  // const completeTodo = (id) => {
  //   const updatedList = todoList.filter((todo) => {
  //     if (todo.id === id) return { ...todo, completed: true };

  //     return todo;
  //   });

  //   setTodoList(updatedList);
  // };

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>TodoList</Text>
        <Button
          color="#4043c9"
          title="New"
          onPress={() => setIsVisibleModal(true)}
        />
      </View>

      <TodoForm
        isVisible={isVisibleModal}
        closeModal={() => setIsVisibleModal(false)}
        addTodo={addTodo}
      />

      <TodoList todos={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#4043c9",
    fontSize: 20,
    fontWeight: "600",
  },
});
