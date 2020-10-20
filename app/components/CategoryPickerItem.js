import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';
import Icon from './Icon';
import defaultStyles from '../config/styles';

// todo : ganti nama jadi category picker item
function CategoryPickerItem({ IconComponent, label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {IconComponent}
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    text: {
        textAlign: 'center',
        marginTop: 8
    }
})

export default CategoryPickerItem;