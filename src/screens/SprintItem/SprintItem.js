import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SprintItem({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [goalTitle, setGoalTitle] = useState('');
  const [goalValue, setGoalValue] = useState('');
  const [goalSteps, setGoalSteps] = useState('');

  const handleSubmit = () => {
    onSubmit({
      title,
      start,
      finish,
      goalTitle,
      goalValue,
      goalSteps,
    });
    setTitle('');
    setStart('');
    setFinish('');
    setGoalTitle('');
    setGoalValue('');
    setGoalSteps('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Start Date"
        style={styles.input}
        value={start}
        onChangeText={setStart}
      />
      <TextInput
        placeholder="Finish Date"
        style={styles.input}
        value={finish}
        onChangeText={setFinish}
      />
      <TextInput
        placeholder="Goal Title"
        style={styles.input}
        value={goalTitle}
        onChangeText={setGoalTitle}
      />
      <TextInput
        placeholder="Goal Value"
        style={styles.input}
        value={goalValue}
        onChangeText={setGoalValue}
      />
      <TextInput
        placeholder="Goal Steps"
        style={styles.input}
        value={goalSteps}
        onChangeText={setGoalSteps}
      />
      <Button title="Create Todo" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});