import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

const EditSprint = ({ todo, onSave }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [startDate, setStartDate] = useState(todo.startDate);
  const [endDate, setEndDate] = useState(todo.endDate);
  const [goals, setGoals] = useState(todo.goals);

  const saveChanges = () => {
    const updatedTodo = {
      ...todo,
      title,
      description,
      startDate,
      endDate,
      goals,
    };
    onSave(updatedTodo);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Todo title"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Todo description"
      />
      <TextInput
        style={styles.input}
        value={startDate}
        onChangeText={setStartDate}
        placeholder="Start date"
      />
      <TextInput
        style={styles.input}
        value={endDate}
        onChangeText={setEndDate}
        placeholder="End date"
      />
      <TextInput
        style={styles.input}
        value={goals}
        onChangeText={setGoals}
        placeholder="Goals"
      />
      <Button title="Save" onPress={saveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});

export default EditSprint;