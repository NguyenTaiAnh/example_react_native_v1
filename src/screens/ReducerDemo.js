import React, { useReducer } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SquareComponent from '../components/SquareComponent';

const NumberCounter = 30;
const reducerDemo = (state, action) =>{
    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state 
            : {...state, red: state.red + action.payload};
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : {...state, green: state.green + action.payload};
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : {...state, blue: state.blue + action.payload};
        case 'reset':
            return {red:0, green:0, blue:0};
        default:
            return;
    }
}
const ReducerDemo = () => {
    const [state, dispart] = useReducer(reducerDemo, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state
    return (
        <View>
            <TouchableOpacity onPress={()=>dispart({type:'reset'})}>
                <Text style={styles.txtStyle}>Reset Color</Text>
            </TouchableOpacity>
            <SquareComponent title="red" 
                Increase={() => dispart({type:'red', payload: NumberCounter})}
                Decrease={() => dispart({type:'red', payload: -1*NumberCounter})}
            />
            <SquareComponent title="green"
                Increase={() => dispart({type:'green', payload: NumberCounter})}
                Decrease={() => dispart({type:'green', payload: -1*NumberCounter})}
            />
            <SquareComponent title="blue"
                Increase={() => dispart({type:'blue', payload: NumberCounter})}
                Decrease={() => dispart({type:'blue', payload: -1*NumberCounter})}
            />
            <View style={{ backgroundColor:`rgb(${red}, ${green}, ${blue})` , width: 100, height: 100 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    txtStyle:{
        fontSize:25,
        backgroundColor: "#442",
        opacity: 0.5
    }
})

export default ReducerDemo;
