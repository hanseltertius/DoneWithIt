import React from 'react';
import { Dimensions, Image, Platform, StatusBar, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './app/components/AppText';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import Button from './app/components/Button';
import colors from './app/config/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import TaglineText from './app/components/TaglineText';
import DetailTitleText from './app/components/DetailTitleText';
import PriceText from './app/components/PriceText';
import CardItemText from './app/components/CardItemText';
import Card from './app/components/Card';
import ListItemScreen from './app/screens/ListItemScreen';

export default function App() {
  return (
    <ViewImageScreen />
  );
}