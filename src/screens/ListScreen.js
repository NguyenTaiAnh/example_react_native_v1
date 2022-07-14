import React from 'react';
import {FlatList, StyleSheet, Text} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "Name #1", age: 20},
        {name: "Name #2", age: 22},
        {name: "Name #3", age: 23},
        {name: "Name #4", age: 24},
        {name: "Name #5", age: 25},
        {name: "Name #6", age: 26},
        {name: "Name #7", age: 27},
        {name: "Name #8", age: 28},
        {name: "Name #9", age: 29},
    ]
    return <FlatList
        style={{backgroundColor: "white"}}
        keyExtractor={friends => friends.name}
        data={friends}
        showsVerticalScrollIndicator={false} 
        renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />
}
const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 40,
    }
})

export default ListScreen;