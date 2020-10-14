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
          paddingLeft: 30,
          padding: 20,
          paddingHorizontal: 10,

        }}>
        <View
          style={{
            backgroundColor: 'gold',
            width: 50,
            height: 50
          }} />
      </View>

      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
          margin: 20,
        }} />

    </View>
  );
}