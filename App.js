import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/view/login';
import Registro from './src/view/registro';
import EsqueciSenha from './src/view/esquecisenha';
import Home from './src/view/home';
import Produto from './src/view/produto';
import AdicionarProduto from './src/components/adicionarproduto';
import Clientes from './src/view/cliente';
import BottomNavBar from './src/components/BottomNavBar';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="AdicionarProduto" component={AdicionarProduto} />
        <Stack.Screen name="Clientes" component={Clientes} />
      </Stack.Navigator>
      <BottomNavBar />
    </NavigationContainer>
    
    
  );
};

export default App;
