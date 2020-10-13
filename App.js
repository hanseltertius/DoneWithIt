import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text
        numberOfLines={1}
        onPress={handlePress}>
        Hello React Native - A really really long text.
        Now I wanna make this even longer and see what happens!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
