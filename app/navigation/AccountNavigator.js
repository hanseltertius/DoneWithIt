import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import ListingsScreen from '../screens/ListingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
        <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
        <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;