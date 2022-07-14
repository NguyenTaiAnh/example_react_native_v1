import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import SquareComponent from '../components/SquareComponent';

const NumberCounter = 30;
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const setColor = (title, change) => {
        switch (title) {
            case 'red':
                red+change > 255 || red + change < 0 ? null : setRed(red+change);
                return;
            case 'green':
                green+change > 255 || green + change < 0 ? null : setGreen(green+change);
                return;
            case 'blue':
                blue+change > 255 || blue + change < 0 ? null : setBlue(blue+change);
                return;
            
            default:
                break;
        }
    }
    // console.log("blue: ", blue)
    // console.log("red: ", red)
    // console.log("green: ", green)
    const resetColor = () => {
        setRed(0)
        setGreen(0)
        setBlue(0)
    }
    return (
        <View>
            <TouchableOpacity onPress={resetColor}>
                <Text style={styles.txtStyle}>Click Reset Color</Text>
            </TouchableOpacity>
            <SquareComponent title="red" 
                Increase={() => setColor('red',NumberCounter)}
                Decrease={() => setColor('red',-1*NumberCounter)}
            />
            <SquareComponent title="green"
                Increase={() => setColor('green',NumberCounter)}
                Decrease={() => setColor('green', -1*NumberCounter)}
            />
            <SquareComponent title="blue"
                Increase={() => setColor('blue',NumberCounter)}
                Decrease={() => setColor('blue', -1*NumberCounter)}
            />
            <View 
            style={{ backgroundColor:`rgb(${red}, ${green}, ${blue})` , width: 100, height: 100 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    txtStyle:{
        fontSize:25,
        backgroundColor: "#499",
        opacity: 0.5,
    }
})

export default SquareScreen;
