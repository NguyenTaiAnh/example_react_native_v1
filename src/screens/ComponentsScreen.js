import React from 'react';
import {Text , StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const name = "AnhDev"
  return (
    <View>
      <Text style={styles.title}>Getting started with React Native!</Text>
      <Text style={styles.nameShow}>My name {name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  title:{
    fontSize: 45,
  },
  nameShow:{
    fontSize: 20
  }
})

export default ComponentsScreen