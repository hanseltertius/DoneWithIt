import React from 'react';
import { View, StyleSheet, FlatList, Alert, ScrollView } from 'react-native';
import ImageInput from './ImageInput';
import * as ImagePicker from 'expo-image-picker';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {

    return (
        <View>

            <ScrollView horizontal>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={(uri) => onRemoveImage(uri)} />
                        </View>
                    ))}

                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        marginRight: 15
    }
});

export default ImageInputList;