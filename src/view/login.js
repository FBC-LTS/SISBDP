import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleLogin = () => {
  // Expressão regular para validar o formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Expressão regular para validar a senha (pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Verifica se o e-mail e a senha atendem aos critérios
  if (!emailRegex.test(username)) {
    console.log('Por favor, insira um e-mail válido.');
    return;
  } else{
    setEmailError('');
  }

  if (!passwordRegex.test(password)) {
    console.log('A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula e um número.');
    return;
  } else{
    setPasswordError('');
  }

  // Se ambos passarem na validação, os dados de login são válidos
  console.log('Login realizado com sucesso!');
};


  const handleCreateAccount = () => {
    // Lógica para criar uma nova conta
    console.log('Redirecionando para a página de criação de conta...');
  };

  const handleForgotPassword = () => {
    // Lógica para redefinir a senha
    console.log('Redirecionando para a página de redefinição de senha...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Insira o seu e-mail"
      />
      {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Insira a sua senha"
      />
      {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
          <View style={[styles.checkbox, rememberMe && styles.checked]} />
        </TouchableOpacity>
        <Text style={styles.rememberMeLabel}>Lembrar de mim</Text>
      </View>
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.link}>Não possui uma conta? Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingLeft: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'blue', // Altere para a cor desejada
  },
  rememberMeLabel: {
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: 'blue', // Altere para a cor desejada
    textDecorationLine: 'underline',
  },
});

export default Login;
