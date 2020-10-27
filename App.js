import React from 'react';
import { Button } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );

}

// return (
//   <NavigationContainer theme={navigationTheme}>
//     <AppNavigator />
//   </NavigationContainer>
// );