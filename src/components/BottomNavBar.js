import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importa os ícones do pacote "expo-vector-icons"

const BottomNavBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <FontAwesome name="search" size={24} color="white" />  
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Produtos')}>
        <FontAwesome name="list" size={24} color="white" /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <FontAwesome name="user" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('More')}>
        <FontAwesome name="bars" size={24} color="white" />  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0057D9',
    height: 60,
    paddingHorizontal: 10,
  },
});

export default BottomNavBar;