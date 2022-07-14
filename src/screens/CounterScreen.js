import React, { useReducer } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const reducer = (state, action) =>{
    switch(action.type){
        case "Increase":
            return {...state, count: state.count + action.payload}
        case "Decrease":
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <View>
            <Button
                title='Increase'
                onPress={() => dispatch({type: 'Increase', payload: 1})}
            />
            <Button
                title='Decrease'
                onPress={() => dispatch({type: 'Decrease', payload: 1})}
            />
            <Text style={styles.txtStyle}>Current Count:</Text>
            <Text style={styles.txtStyle}>{state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    txtStyle:{
        fontSize:25,
        textAlign: 'center',
    }
})

export default CounterScreen;
