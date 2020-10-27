import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import Icon from '../components/Icon';
import { ListItem, ListItemSeparator } from '../components/lists';
import colors from '../config/colors';
import routes from '../navigation/routes';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: routes.LISTINGS
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
];

function AccountScreen({ navigation }) {

    return (
        <Screen style={styles.screen} >

            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subTitle="programmingwithmosh@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>

            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;