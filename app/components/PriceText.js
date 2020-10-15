import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function PriceText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: colors.secondary,
        fontWeight: 'bold',
    }
})

export default PriceText;