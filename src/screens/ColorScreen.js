import React, { useState } from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [color, setColor] = useState([])
    const addColor = () => {
        setColor([...color, colorRandom()])
    }
    const colorRandom = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        return `rgb(${r},${g},${b})`;
    }
    const resetColor = () => {
        setColor([])
    }
    return (
        <View>
            <Button
                title="Add Color"
                onPress={addColor}
            />
            <Button
                title="Reset Color"
                onPress={resetColor}
            />
            <FlatList
                data={color}
                keyExtractor={keyExtractor => keyExtractor}
                showsVerticalScrollIndicator = {false}
                renderItem={({item}) => {
                    return <View style={{ width: 100, height: 100, backgroundColor:item }} />
                }}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default ColorScreen;
