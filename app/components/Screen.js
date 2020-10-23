import React from 'react';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import colors from '../config/colors';

function Screen({ children, style }) {
    if (Platform.OS === 'ios') {
        return (
            <SafeAreaView style={[styles.screen, style]}>
                <View style={[styles.view, style]}>{children}</View>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={[styles.screen, style]}>
                {children}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1
    }
})

export default Screen;