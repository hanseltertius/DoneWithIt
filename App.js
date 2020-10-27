import React from 'react';
import { Button } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {

  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value);

      console.log(person);
    } catch (error) {
      console.log(error);
    }
  }

  demo();

  return null;

}

// return (
//   <NavigationContainer theme={navigationTheme}>
//     <AppNavigator />
//   </NavigationContainer>
// );