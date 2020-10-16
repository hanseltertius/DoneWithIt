import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import SectionScreen from './SectionScreen';

import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const initialStatuses = [
    {
        id: 1,
        title: "My Listings",
        image: "format-list-bulleted",
        color: "primary"
    },
    {
        id: 2,
        title: "My Messages",
        image: "email",
        color: "secondary"
    }
]

function MyAccountScreen(props) {

    const [statuses, setStatuses] = useState(initialStatuses);

    return (
        <Screen>
            <SectionScreen>
                <ListItem
                    image={require('../assets/mosh.jpg')}
                    title="Mosh Hamedani"
                    subTitle="5 Listings" />
            </SectionScreen>

            <SectionScreen>
                <FlatList
                    data={statuses}
                    keyExtractor={status => status.id.toString()}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            image={item.image}
                            color={item.color} />}
                    ItemSeparatorComponent={ListItemSeparator} />
            </SectionScreen>

            <SectionScreen>
                <ListItem
                    image="logout"
                    title="Log Out"
                    color="yellow" />
            </SectionScreen>
        </Screen>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 16
    }
})

export default MyAccountScreen;