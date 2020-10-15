import React from 'react';
import { StyleSheet, Text } from 'react-native';

function CardItemText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        marginBottom: 8
    }
})

export default CardItemText;