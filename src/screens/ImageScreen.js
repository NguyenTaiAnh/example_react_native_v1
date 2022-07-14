import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageComponent from '../components/ImageComponent';

const ImageScreen = () => {
    return (
        <View>
            <ImageComponent title="Forest" imgSources={require('../../assets/forest.jpg')} score={7}/>
            <ImageComponent title="Beach" imgSources={require('../../assets/beach.jpg')} score={10}/>
            <ImageComponent title="Mountain" imgSources={require('../../assets/mountain.jpg')} score={4}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ImageScreen;
