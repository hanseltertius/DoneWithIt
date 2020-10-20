import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import Card from './app/components/Card';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import { Switch, Text, TextInput } from 'react-native';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import Icon from './app/components/Icon';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 }
];

export default function App() {

  const [category, setCategory] = useState();

  return (
    <ListingEditScreen />
  )
}