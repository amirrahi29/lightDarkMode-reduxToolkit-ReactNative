import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { initializeDarkMode, toggleDarkMode, saveDarkMode } from './redux/features/darkModeSlice';

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    dispatch(initializeDarkMode());
  }, [dispatch]);

  const handleToggle = () => {
    // Toggle dark mode
    dispatch(toggleDarkMode());
    // Save the updated mode
    dispatch(saveDarkMode(!mode));
  };

  return (
    <View style={[styles.container, { backgroundColor: mode ? '#333' : '#f5f5f5' }]}>
      <Text style={[styles.text, { color: mode ? '#f5f5f5' : '#333' }]}>
        Dark Mode is {mode ? 'On' : 'Off'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.buttonText}>Toggle Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default App;
