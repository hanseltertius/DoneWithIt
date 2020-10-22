import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import defaultStyles from './app/config/styles';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

  return (
    <ListingEditScreen />
  )
}