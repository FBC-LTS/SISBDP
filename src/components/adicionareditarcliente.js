import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../components/api';

const AdicionarEditarCliente = ({ route, navigation }) => {
  const [cliente, setCliente] = useState({
    nome: '',
    email: ''
  });

  useEffect(() => {
    if (route.params && route.params.cliente) {
      setCliente(route.params.cliente);
    }
  }, [route.params]);

  const handleSave = async () => {
    try {
      if (cliente.id) {
        // Editar cliente existente
        await api.put(`/clientes/${cliente.id}`, cliente);
      } else {
        // Adicionar novo cliente
        await api.post('/clientes', cliente);
      }
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao salvar cliente. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{cliente.id ? 'Editar Cliente' : 'Adicionar Cliente'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={cliente.nome}
        onChangeText={(text) => setCliente({ ...cliente, nome: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={cliente.email}
        onChangeText={(text) => setCliente({ ...cliente, email: text })}
      />
      <Button title="Salvar" onPress={handleSave} />
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AdicionarEditarCliente;
