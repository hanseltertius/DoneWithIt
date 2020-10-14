import React from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image
                source={require('../assets/chair.jpg')}
                resizeMode='contain'
                style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
});