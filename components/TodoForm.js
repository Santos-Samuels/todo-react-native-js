import { useState } from "react"
import { Modal, TextInput, StyleSheet, View, Button, Text } from "react-native"

const TodoForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const addTodoHandler = () => {
    if (enteredTodo) {
      const newTodo = {id: Date.now().toString(), description: enteredTodo.trim(), completed: false}
      props.addTodo(newTodo)
      setEnteredTodo('')
      setErrorMessage('')
      props.closeModal()
      return
    }

    setErrorMessage("Can't add empety todo")
  }

  
  const closeModalHandler = () => {
    setEnteredTodo('')
    setErrorMessage('')
    props.closeModal()
  }

  return (
    <Modal visible={props.isVisible} style = {{ margin: 0 }} animationType="slide" >
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Enter something to do' onChangeText={(text) => setEnteredTodo(text)} value={enteredTodo} />
        {(errorMessage && !enteredTodo) ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <View style={styles.buttonsContainer}>
          <View style={styles.button}><Button color='red' title='Cancel' onPress={closeModalHandler} /></View>
          <View style={styles.button}><Button color="#4043c9" title='Add' onPress={addTodoHandler} /></View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  button: {
    width: '40%',
    marginHorizontal: 10,
    textAlign: 'center'
  },

  error: {
    color: 'red',
    marginBottom: 10
  }
})

export default TodoForm