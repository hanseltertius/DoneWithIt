import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './Text';
import Icon from './Icon';
import defaultStyles from '../config/styles';

// todo : ganti nama jadi category picker item
function CategoryPickerItem({ item, label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.name} size={80} />
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: '33%'
    },
    label: {
        textAlign: 'center',
        marginTop: 5
    }
})

export default CategoryPickerItem;