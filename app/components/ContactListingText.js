import React from 'react';
import { StyleSheet, Text } from 'react-native';

function ContactListingText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: 'grey',
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    }
})

export default ContactListingText;