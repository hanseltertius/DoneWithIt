import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Text, View, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click Me" onPress={() => console.log("Button Pressed")} />
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
