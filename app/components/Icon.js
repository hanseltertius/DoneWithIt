import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function Icon({ name, color = "primary" }) {
    return (
        <View style={[styles.container, { backgroundColor: colors[color] }]}>
            <MaterialCommunityIcons
                name={name}
                size={24}
                color='white' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
})

export default Icon;