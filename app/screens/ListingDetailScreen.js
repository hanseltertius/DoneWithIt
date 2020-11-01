import React from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import * as Yup from 'yup';
import * as Notifications from 'expo-notifications';

import AppText from '../components/Text';
import { ListItem } from '../components/lists';
import colors from '../config/colors';
import { Form, FormField, SubmitButton } from '../components/form';
import messagesApi from '../api/messages';
import ContactSellerForm from '../components/ContactSellerForm';
import listings from '../api/listings';

const validationSchema = Yup.object().shape({
    message: Yup.string().required().label("Message")
});

export default function ListingDetailScreen({ route }) {

    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <Image
                style={styles.image}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
                uri={listing.images[0].url} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                        showChevrons={true} />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>

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

