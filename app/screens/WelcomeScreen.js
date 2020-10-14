import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import colors from '../config/colors';

export default function WelcomeScreen() {
    const redButton = { backgroundColor: '#fc5c65' };
    const greenButton = { backgroundColor: '#4ECDC4' };

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    },
});