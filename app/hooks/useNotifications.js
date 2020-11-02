import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';
import logger from '../utility/logger';

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

        if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);

    }, []);

    const registerForPushNotifications = async () => {

        try {
            const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permissions.granted) return;

            const token = (await Notifications.getExpoPushTokenAsync()).data;
            expoPushTokensApi.register(token);

        } catch (error) {
            logger.log('Error getting a push token', error);
        }
    }
}