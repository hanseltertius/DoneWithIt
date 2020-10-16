import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from './Icon';

function ListItem({ title, subTitle, image, onPress, renderRightActions, color }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {subTitle ?
                        <Image source={image} style={styles.image} /> :
                        <Icon name={image} color={color} />}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle ? <AppText style={styles.subTitle}>{subTitle}</AppText> : null}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    subTitle: {
        color: colors.medium
    },
    textContainer: {
        alignSelf: 'center'
    },
    title: {
        fontWeight: '500'
    }
})

export default ListItem;