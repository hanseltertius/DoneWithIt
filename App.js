import React from 'react';
import { Text, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        // fontFamily: 'notoserif',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'tomato',
        textTransform: 'capitalize',
        textDecorationLine: 'none',
        textAlign: 'center',
        lineHeight: 40
      }}>
        I love React Native! This is my first React Native app! Here's some more text!
      </Text>
    </View>
  );
}