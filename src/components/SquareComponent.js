import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SquareComponent = ({title, Increase, Decrease}) => {
    return (
        <View>
            <Text>Color {title}</Text>
            <Button 
                title={`Increase ${title}`}
                onPress={Increase}
            />
            <Button 
                title={`Decrease ${title}`}
                onPress={Decrease}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SquareComponent;
