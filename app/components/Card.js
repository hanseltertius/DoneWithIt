import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import CardItemText from './CardItemText';
import PriceText from './PriceText';

function Card(props) {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={props.image}
                resizeMode='cover'
                style={styles.productImage}
            />
            <View style={styles.cardTextContainer}>
                <CardItemText>{props.title}</CardItemText>
                <PriceText>{props.subTitle}</PriceText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        alignSelf: 'stretch',
        height: 250,
        borderRadius: 10,
        margin: 16
    },
    cardTextContainer: {
        margin: 16
    },
    productImage: {
        width: '100%',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
});

export default Card;