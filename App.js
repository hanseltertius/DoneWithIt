import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar, Dimensions } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function App() {

  return (
    <View
      style={{
        backgroundColor: 'dodgerblue',
        flex: 1
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          flex: 1
        }} />

      <View
        style={{
          backgroundColor: 'gold',
          flex: 1
        }} />

      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1
        }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
