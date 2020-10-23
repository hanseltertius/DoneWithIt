import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import defaultStyles from './app/config/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NewListingButton from './app/components/NewListingButton';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
  </Stack.Navigator>
);

const ListingEditNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListingEdit" component={ListingEditScreen} />
  </Stack.Navigator>
)

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={MyAccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Listings" component={ListingsScreen} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{
    activeTintColor: defaultStyles.colors.primary,
    inactiveTintColor: defaultStyles.colors.medium
  }}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" size={size} color={color} /> }} />
    <Tab.Screen
      name="Edit"
      component={ListingEditNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("Edit")} />
      })} />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{ tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" size={size} color={color} /> }} />
  </Tab.Navigator>
)

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );

}