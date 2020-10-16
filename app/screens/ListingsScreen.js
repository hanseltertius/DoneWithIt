import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Constants from 'expo-constants';

import colors from '../config/colors';
import Screen from '../components/Screen';
import Card from '../components/Card';

const initialListings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: "$100",
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: "$1000",
        image: require("../assets/couch.jpg")
    }
]

function ListingsScreen(props) {

    const [listings, setListings] = useState(initialListings);

    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={item.price}
                        image={item.image}
                    />}
            />
        </Screen>
    );
}

export default ListingsScreen;