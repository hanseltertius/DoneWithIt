import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

export default function WelcomeScreen() {
    const redButton = { backgroundColor: '#fc5c65' };
    const greenButton = { backgroundColor: '#4ECDC4' };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                style={styles.imageBackground}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo-red.png')}
                        style={styles.logo} />
                    <Text>Sell What You Don't Need</Text>
                </View>
            </ImageBackground>

            <View style={[styles.button, redButton]} />
            <View style={[styles.button, greenButton]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        top: 64
    },
    logo: {
        width: 100,
        height: 100
    },
    button: {
        width: '100%',
        height: 72
    }
});