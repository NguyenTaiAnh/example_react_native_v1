import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ImageComponent = ({imgSources, title, score}) => {
    // console.log("props:", );
    return (
        <View>
            <Image source={imgSources} />
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ImageComponent;
