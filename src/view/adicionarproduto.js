import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import api from '../components/api';

const AdicionarProduto = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const adicionarProduto = async () => {
    if (!nome || !preco) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      await api.post('/produtos', {
        nome,
        preco,
      });
      Alert.alert('Sucesso', 'Produto adicionado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      if (error.response.status === 422) {
        Alert.alert('Erro', `Erro ao adicionar produto: ${error.response.data.detail[0].msg}`);
      } else {
        Alert.alert('Erro', 'Erro ao adicionar produto. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adicionar Produto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do produto"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <Button title="Adicionar" onPress={adicionarProduto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default AdicionarProduto;
