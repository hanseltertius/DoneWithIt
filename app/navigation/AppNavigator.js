import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';
import navigation from './rootNavigation';
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    useNotifications();

    useEffect(() => {
        registerForPushNotifications();

        Notifications.addNotificationReceivedListener((notification) => {
            navigation.navigate(routes.ACCOUNT);
        });

        Notifications.addNotificationResponseReceivedListener(response => console.log(response));
    }, []);

    const registerForPushNotifications = async () => {

        try {
            const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permissions.granted) return;

            const token = (await Notifications.getExpoPushTokenAsync()).data;
            expoPushTokensApi.register(token);

        } catch (error) {
            console.log('Error getting a push token', error);
        }
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name={routes.FEED}
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }} />
            <Tab.Screen
                name={routes.LISTING_EDIT}
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
                        />
                    )
                })} />
            <Tab.Screen
                name={routes.ACCOUNT}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
                }} />
        </Tab.Navigator>
    );
}

export default AppNavigator;