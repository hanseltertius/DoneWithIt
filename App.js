import React from 'react';
import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          elevation: 20
        }} />
    </View>
  );
}