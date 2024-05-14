import React from 'react';
import { View } from 'react-native';
import Login from './src/view/login';
import Registro from './src/view/registro';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login/>
    </View>
  );
};

export default App;