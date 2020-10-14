import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {

  const redButton = { backgroundColor: '#fc5c65' };
  const greenButton = { backgroundColor: '#4ECDC4' };

  return (
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    top: 60
  },
  logo: {
    width: 100,
    height: 100
  },
  button: {
    width: '100%',
    height: 72
  }
});
