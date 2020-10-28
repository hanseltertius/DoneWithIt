import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';


export default function App() {

  const [user, setUser] = useState();


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>

  );

}

// return (
//   <NavigationContainer theme={navigationTheme}>
//     <AppNavigator />
//   </NavigationContainer>
// );