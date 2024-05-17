import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/view/login';
import Registro from './src/view/registro';
import EsqueciSenha from './src/view/esquecisenha';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
