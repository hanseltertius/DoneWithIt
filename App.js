import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Text, View, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {

  const containerStyle = { backgroundColor: 'orange' };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => Alert.alert("My title", "My message", [
        { text: "Yes", onPress: () => console.log("Yes") },
        { text: "No", onPress: () => console.log("No") }
      ])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
