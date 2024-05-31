import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/view/login';
import Registro from './src/view/registro';
import EsqueciSenha from './src/view/esquecisenha';
import Home from './src/view/home';
import Produto from './src/view/produto';
import AdicionarProduto from './src/components/adicionarproduto';
import Clientes from './src/view/cliente';
import BottomNavBar from './src/components/BottomNavBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Crie um novo componente que inclua o BottomTabNavigator
function MainTabScreen() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Produto" component={Produto} />
      <Tab.Screen name="Clientes" component={Clientes} />
      {/* Adicione outras telas que devem ter o BottomNavBar aqui */}
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen name="Main" component={MainTabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AdicionarProduto" component={AdicionarProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
