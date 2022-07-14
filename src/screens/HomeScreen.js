import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello React Native</Text>
      <Button
        title='Go to component demo'
        onPress={() => navigation.navigate('Component')}
      />
      <Button
        title='Go to list demo'
        onPress={()=>navigation.navigate('List')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ListImg')}>
        <Text style={styles.imgScreen}>Click TouchableOpacity Image</Text>
      </TouchableOpacity>
      <Button 
        title='Color Screen Demo'
        onPress={()=>navigation.navigate('Color')}  
      />
      <Button 
        title='Square Screen Demo'
        onPress={()=>navigation.navigate('Square')}  
      />
      <Button 
        title='Reducer Apply Demo'
        onPress={()=>navigation.navigate('Reducer')}  
      />
      <Button 
        title='Counter Screen Demo'
        onPress={()=>navigation.navigate('Counter')}  
      />
      <Button 
        title='Text Screen Demo'
        onPress={()=>navigation.navigate('TextS')}  
      />
      <Button 
        title='Box Screen Demo'
        onPress={()=>navigation.navigate('Box')}  
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  imgScreen:{
    backgroundColor: '#555',
    opacity:0.5,
    fontSize: 25,
  }
});

export default HomeScreen;
