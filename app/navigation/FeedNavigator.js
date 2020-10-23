import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
        <Stack.Screen
            name={routes.LISTING_DETAILS}
            component={ListingDetailScreen}
        />
    </Stack.Navigator>
);

export default FeedNavigator;