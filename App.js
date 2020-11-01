import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import * as Notifications from 'expo-notifications';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import { Button } from 'react-native';


export default function App() {

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

  // const showNotification = () => {
  //   // Notifications.presentNotificationAsync({
  //   //   title: "Congratulations",
  //   //   body: "Your order was successfully placed!",
  //   //   data: {
  //   //     _displayInForeground: true
  //   //   }
  //   // });

  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true
  //     })
  //   });


  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "Congratulations",
  //       body: "Your order was successfully placed!",
  //       data: {
  //         _displayInForeground: true
  //       }
  //     },
  //     trigger: {
  //       seconds: 2,
  //     }
  //   });

  // }

  // return (
  //   <Screen>
  //     <Button title="Test" onPress={showNotification} />
  //   </Screen>
  // )

}

// return (
//   <NavigationContainer theme={navigationTheme}>
//     <AppNavigator />
//   </NavigationContainer>
// );