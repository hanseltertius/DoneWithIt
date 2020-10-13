import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Text, View, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert } from 'react-native';

export default function App() {

  const containerStyle = { backgroundColor: 'orange' };

  return (
    <View style={[styles.container, containerStyle]}>
      <Button title="Click Me" onPress={() => Alert.alert("My title", "My message", [
        { text: "Yes", onPress: () => console.log("Yes") },
        { text: "No", onPress: () => console.log("No") }
      ])} />
    </View>
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
