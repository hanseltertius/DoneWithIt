import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';
import Button from '../components/Button';
import TaglineText from '../components/TaglineText';

import colors from '../config/colors';

export default function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
            blurRadius={3}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <TaglineText>Sell what You don't need</TaglineText>
            </View>
            <Button
                text="Login"
                color={colors.primary} />
            <Button
                text="Register"
                color={colors.secondary} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
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
});