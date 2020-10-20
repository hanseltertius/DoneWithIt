import React from 'react';
import { Image, ImageComponent, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import defaultStyles from '../../config/styles';
import Icon from '../Icon';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions, showChevrons }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={defaultStyles.colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={2}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>}
                    </View>
                    {showChevrons &&
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color={defaultStyles.colors.medium}
                        />}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: defaultStyles.colors.white,
        alignItems: 'center'
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subTitle: {
        color: defaultStyles.colors.medium
    },
    title: {
        fontWeight: '500'
    }
})

export default ListItem;