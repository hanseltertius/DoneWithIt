import React from 'react';
import { Keyboard, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from './form';
import messagesApi from '../api/messages';

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
});

function ContactSellerForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if (!result.ok) {
            console.log("Error", result)
            return Alert.alert("Error", "Could not send the message to the seller.");
        }

        resetForm();

        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true
            })
        });

        Notifications.scheduleNotificationAsync({
            content: {
                title: "Awesome!",
                body: "Your message was sent to the seller.",
                data: {
                    _displayInForeground: true
                }
            },
            trigger: {
                seconds: 0
            }
        });
    }
    return (
        <Form
            initialValues={{ message: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>

            <FormField
                maxLength={255}
                multiline
                name="message"
                numberOfLines={3}
                placeholder="Message..."
            />

            <SubmitButton title="Contact Seller" />
        </Form>
    );
}

export default ContactSellerForm;