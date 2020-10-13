import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image
          fadeDuration={1000}
          blurRadius={10}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableOpacity>
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
