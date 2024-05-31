import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../components/api'; // Verifique o caminho para o arquivo api.js

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token } = response.data;

      if (rememberMe) {
        await AsyncStorage.setItem('authToken', token);
      }
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      Alert.alert('Erro', 'Erro ao realizar login. Verifique suas credenciais e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-Vindo(a)!</Text>
      {/* Substitua "logo.png" pelo caminho correto do seu logo */}
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
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <Text style={styles.rememberMeText}>{rememberMe ? '✅ Lembrar-me' : 'Lembrar-me'}</Text>
        </TouchableOpacity>
      </View>
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeText: {
    color: '#fff',
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
