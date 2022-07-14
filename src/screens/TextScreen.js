import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {
    const [character, setCharacter] = useState('')
    return (
        <View>
            <TextInput 
            style={styles.inputStyle}
            autoCorrect={false}
            autoCapitalize='none'
            value={character}
            onChangeText = {(newValue)=> setCharacter(newValue)}
            secureTextEntry={true}
            />
            {character.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
            <Text>Pass: {character}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: "black",
        margin: 15,
        borderWidth: 1
    }
})

export default TextScreen;
