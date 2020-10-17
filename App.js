import React, { useState } from 'react';
import AppText from './app/components/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import Card from './app/components/Card';
import ListItemScreen from './app/screens/ListItemScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import { Switch, Text, TextInput } from 'react-native';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 }
];

export default function App() {

  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}