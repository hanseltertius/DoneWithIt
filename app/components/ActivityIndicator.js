import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false, source }) {
    if (!visible) return null;
    return (
        <LottieView
            autoPlay
            loop
            source={source} />
    );
}

export default ActivityIndicator;