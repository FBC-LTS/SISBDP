import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Registro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const [erroUsuario, setErroUsuario] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');

  const handleRegistro = () => {
    if (!nome) {
      setErroNome('Por favor, insira seu nome completo.');
      return;
    } else {
      setErroNome('');
    }

    if (!email) {
        setErroEmail('Por favor, insira seu e-mail.');
        return;
    } else {
        setErroEmail(''); 
    }

    if (!telefone) {
        setErroTelefone('Por favor, insira seu telefone.');
        return;
    } else {
        setErroTelefone('');
    }

    if (!usuario) {
        setErroUsuario('Por favor, insira seu nome de usuário.');
        return;
    } else {
        setErroUsuario('');
    }

    if (!senha) {
        setErroSenha('Por favor, insira sua senha.');
        return;
    } else {
        setErroSenha('');
    }

    if (!confirmarSenha) {
        setErroConfirmarSenha('Por favor, confirme sua senha.');
        return;
    } else {
        setErroConfirmarSenha('');
    }

    if (senha !== confirmarSenha) {
        setErroConfirmarSenha('As senhas não coincidem.');
        return;
    }

    if (nome && email && telefone && usuario && senha && confirmarSenha) {
        console.log('Registro realizado com sucesso!');
    } else { 
        console.log('Por favor, preencha todos os campos obrigatórios.');
    }


    console.log('Registro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Insira seu nome completo"
      />
      {erroNome ? <Text style={{ color: 'red' }}>{erroNome}</Text> : null}

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Insira seu e-mail"
      />
      {erroEmail ? <Text style={{ color: 'red' }}>{erroEmail}</Text> : null}

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTelefone}
        value={telefone}
        placeholder="Insira seu telefone"
      />
      {erroTelefone ? <Text style={{ color: 'red' }}>{erroTelefone}</Text> : null}

      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsuario}
        value={usuario}
        placeholder="Insira seu nome de usuário"
      />
      {erroUsuario ? <Text style={{ color: 'red' }}>{erroUsuario}</Text> : null}

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        secureTextEntry={true}
        placeholder="Insira sua senha"
      />
        {erroSenha ? <Text style={{ color: 'red' }}>{erroSenha}</Text> : null}

        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput
            style={styles.input}
            onChangeText={setConfirmarSenha}
            value={confirmarSenha}
            secureTextEntry={true}
            placeholder="Confirme sua senha"
        />
        {erroConfirmarSenha ? <Text style={{ color: 'red' }}>{erroConfirmarSenha}</Text> : null}
      <Button title="Registrar" onPress={handleRegistro} />
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
});

export default Registro;
