import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';

export default function App() {

  const requestPermission = async () => {

    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);

    // const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library');
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen></Screen>
  )
}