import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReviewDetails from './screens/reviewDetails';
import Home from './screens/home';
import About from './screens/about';

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
      <About></About>
      <ReviewDetails></ReviewDetails>
      <StatusBar style="auto" />
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
});
