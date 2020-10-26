import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';

import AppText from '../components/Text';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator';

function UploadScreen({ loading, progress, onDone }) {
    return (
        <Modal visible={loading} animationType='slide' >
            <Screen style={styles.container} >
                {progress < 1 && <Progress.Bar progress={progress} width={200} />}
                {progress === 1 &&
                    <LottieView
                        autoPlay
                        loop={false}
                        source={require('../assets/animations/done.json')}
                        onAnimationFinish={onDone} />}
            </Screen>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UploadScreen;