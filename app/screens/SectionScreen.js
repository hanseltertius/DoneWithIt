import React from 'react';
import { StyleSheet, View } from 'react-native';

function SectionScreen({ children }) {
    return (
        <View style={styles.sectionContainer}>{children}</View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 16
    }
})

export default SectionScreen;