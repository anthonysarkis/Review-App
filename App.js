import React, { useState } from 'react';
import { Text, View,  } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigator from './routes/appNavigator';

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
      <AppNavigator/>
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