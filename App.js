import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar, Dimensions } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function App() {

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 300,
          alignSelf: 'stretch'
        }} />

      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 200
        }} />

      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
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
