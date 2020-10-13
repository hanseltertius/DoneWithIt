import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar, Dimensions } from 'react-native';

export default function App() {

  console.log(`Window : ${JSON.stringify(Dimensions.get('window'))}`);
  console.log(`Screen : ${JSON.stringify(Dimensions.get('screen'))}`);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: "50%",
        height: 70
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
