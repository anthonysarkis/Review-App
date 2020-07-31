import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import ReviewDetails from './screens/reviewDetails';
import Home from './screens/home';
import About from './screens/about';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
}

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <View style={styles.container}>
        <Home></Home>
        <About></About>
        <ReviewDetails></ReviewDetails>
        <StatusBar style="auto" />
      </View>
    );
  }
  else {
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
