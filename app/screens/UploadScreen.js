import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Progress from 'react-native-progress';

import colors from '../config/colors';

function UploadScreen({ progress = 0, visible = false, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ?
                    <Progress.Bar
                        color={colors.primary}
                        progress={progress}
                        width={200} /> :
                    <LottieView
                        autoPlay
                        loop={false}
                        source={require('../assets/animations/done.json')}
                        style={styles.animation}
                        onAnimationFinish={onDone} />}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    animation: {
        width: 150
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UploadScreen;