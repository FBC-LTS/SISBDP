import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import api from './api'; // Certifique-se de que o caminho para o arquivo api está correto

const AdicionarProduto = ({ navigation }) => {
  const [tipo, setTipo] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const adicionarProduto = async () => {
    if (!tipo || !nome || !preco || !quantidade) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      await api.post('/produtos', {
        tipo,
        nome,
        preco,
        quantidade,
      });
      Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao adicionar produto. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastrar um novo produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Tipo"
        value={tipo}
        onChangeText={setTipo}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={adicionarProduto}>
        <Text style={styles.buttonText}>Adicionar Produto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0a0a0a',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#0057D9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AdicionarProduto;
