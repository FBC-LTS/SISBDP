import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EsqueciSenha = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEsqueciSenha = () => {
    // Lógica para enviar e-mail de redefinição de senha
    if (!email) {
      setEmailError('Por favor, insira seu e-mail.');
      return;
    } else {
      // Limpar o erro se o e-mail for fornecido
      setEmailError('');
      console.log('E-mail de redefinição de senha enviado para:', email);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Insira seu e-mail"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <Button title="Enviar E-mail de Redefinição" onPress={handleEsqueciSenha} />
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default EsqueciSenha;
