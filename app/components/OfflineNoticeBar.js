import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './Text';

function OfflineNoticeBar(props) {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.white
    }
});

export default OfflineNoticeBar;