import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../components/api'; // Verifique o caminho para o arquivo api.js

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await api.getToken(email, password);
      if (token) {
        await AsyncStorage.setItem('userToken', token);
        navigation.navigate('Clientes');
      } else {
        
        Alert.alert('Erro', 'Token inválido.');
        console.error('Token inválido' + token);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-Vindo(a)!</Text>
      <View style={styles.logoPlaceholder}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Insira seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.signUpText}>Não possui uma conta? Registre-se!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Fundo escuro
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 40,
  },
  logoPlaceholder: {
    height: 100,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
  },
  logoText: {
    color: '#fff',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
 
  button: {
    backgroundColor: '#0057D9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Login;
