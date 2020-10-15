import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import colors from '../config/colors';

function ListItemScreen(props) {
    return (
        <View style={styles.container}>
            <Card
                title="Red jacket for sale!"
                subTitle="$100"
                image={require('../assets/jacket.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})



export default ListItemScreen;