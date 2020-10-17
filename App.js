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
import { Text, TextInput } from 'react-native';
import Screen from './app/components/Screen';

export default function App() {

  const [firstName, setFirstName] = useState('');

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        onChangeText={text => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1
        }} />
    </Screen>
  );
}