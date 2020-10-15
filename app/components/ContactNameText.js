import React from 'react';
import { StyleSheet, Text } from 'react-native';

function ContactNameText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
    }
})

export default ContactNameText;