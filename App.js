import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <Image source={require('./assets/icon.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
