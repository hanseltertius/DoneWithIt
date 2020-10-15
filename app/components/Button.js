import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

function Button(props) {
    return (
        <TouchableOpacity
            onPress={() => console.log('Clicked')}
            style={styles(props).buttonContainer}>
            <Text style={styles(props).butonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = (props) => StyleSheet.create({
    buttonContainer: {
        borderRadius: 32,
        backgroundColor: props.color,
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginHorizontal: 16,
        marginBottom: 16
    },
    butonText: {
        textTransform: 'uppercase',
        paddingVertical: 16,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    }
})

export default Button;