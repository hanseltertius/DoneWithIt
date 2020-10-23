import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppText from '../components/Text';
import { ListItem } from '../components/lists';
import colors from '../config/colors';

export default function ListingDetailScreen({ route }) {
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={route.params.image} />

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{route.params.title}</AppText>
                <AppText style={styles.price}>${route.params.price}</AppText>

                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title="Mosh Hamedani"
                        subTitle="5 Listings" />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 50
    }
});

