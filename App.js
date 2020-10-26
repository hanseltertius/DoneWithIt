import React from 'react';
import { Button } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {


  const netInfo = useNetInfo();

  return <Button title="Test" disabled={!netInfo.isInternetReachable} onPress={() => console.log("We connected to internet")} />;

}

// return (
//   <NavigationContainer theme={navigationTheme}>
//     <AppNavigator />
//   </NavigationContainer>
// );