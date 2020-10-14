import React from 'react';
import { Dimensions, Image, Platform, StatusBar, StyleSheet, View } from 'react-native';

export default function ViewImageScreen() {
    const redButton = { backgroundColor: '#fc5c65' };
    const greenButton = { backgroundColor: '#4ECDC4' };

    return (
        <View style={styles.container}>
            <View style={[styles.buttonContainer, styles.closeIcon, redButton]} />
            <View style={[styles.buttonContainer, styles.deleteIcon, greenButton]} />
            <Image
                source={require('../assets/chair.jpg')}
                resizeMode='contain'
                style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    buttonContainer: {
        width: 48,
        height: 48
    },
    closeIcon: {
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        left: 24,
        position: 'absolute'
    },
    deleteIcon: {
        top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        right: 24,
        position: 'absolute'
    }
});