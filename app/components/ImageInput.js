import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted) alert('You need to enable permission to access the library');
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log("Error reading an Image", error);
        }
    }

    const handlePress = async () => {
        if (!imageUri) selectImage();
        else Alert.alert("Delete", "Are you sure you want to delete this image?", [
            { text: "Yes", onPress: () => onChangeImage(imageUri) },
            { text: "No", onPress: () => { } }
        ])

    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> :
                    <MaterialCommunityIcons name='camera' size={40} color={defaultStyles.colors.medium} />}
            </View>

        </TouchableWithoutFeedback>


    );
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.light
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 15,
    }
});

export default ImageInput;