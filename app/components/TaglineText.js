import React from 'react';
import { StyleSheet, Text } from 'react-native';

function TaglineText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        textTransform: 'capitalize'
    }
})

export default TaglineText;