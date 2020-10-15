import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContactListingText from '../components/ContactListingText';
import ContactNameText from '../components/ContactNameText';
import DetailTitleText from '../components/DetailTitleText';
import PriceText from '../components/PriceText';
import colors from '../config/colors';

export default function ListingDetailScreen() {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/jacket.jpg')}
                    resizeMode='stretch'
                    style={styles.productImage} />
            </View>



            <View style={styles.productInfo}>
                <DetailTitleText>Red Jacket for sale</DetailTitleText>
                <PriceText>$100</PriceText>
            </View>

            <View style={styles.contact}>
                <Image
                    source={require('../assets/mosh.jpg')}
                    resizeMode='contain'
                    style={{
                        width: 72,
                        height: 72,
                        borderRadius: 100
                    }} />

                <View style={styles.contactDetail}>
                    <ContactNameText>Mosh Hamedani</ContactNameText>
                    <ContactListingText>5 Listings</ContactListingText>
                </View>

            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    contact: {
        margin: 16,
        flexDirection: 'row'
    },
    contactDetail: {
        marginLeft: 8
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 0.5
    },
    productImage: {
        width: '100%',
        height: '100%'
    },
    productInfo: {
        margin: 16
    },

});

