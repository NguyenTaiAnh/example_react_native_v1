import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtOneStyle}></Text>
            <View style={styles.viewTwoParent}>
                <Text style={styles.txtTwoStyle}></Text>
            </View>
            <Text style={styles.txtThreeStyle}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        // height: 200
    },
    txtOneStyle: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
    viewTwoParent:{
        height:200,
        justifyContent: 'flex-end'
    },
    txtTwoStyle: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        alignSelf: 'flex-end'
    },
    txtThreeStyle: {
        width: 100,
        height: 100,
        backgroundColor: "violet"
    },
})

export default BoxScreen;
