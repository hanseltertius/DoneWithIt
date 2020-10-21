import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import defaultStyles from './app/config/styles';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

  const [imageUris, setImageUris] = useState([]);

  const requestPermission = async () => {

    // const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);

    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an Image");
    }
  }

  return (
    <ListingEditScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.light
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 15
  }
})