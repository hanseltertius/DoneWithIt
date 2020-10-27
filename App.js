import React from 'react';
import { Button, Text, View } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import Screen from './app/components/Screen';
import OfflineNoticeBar from './app/components/OfflineNoticeBar';


export default function App() {

  const netInfo = useNetInfo();

  return (
    <Screen>
      { !netInfo.isInternetReachable && <OfflineNoticeBar />}
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Screen>

  );

}

// return (
//   <NavigationContainer theme={navigationTheme}>
//     <AppNavigator />
//   </NavigationContainer>
// );