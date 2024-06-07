import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../components/api_cliente'; // Certifique-se de que o caminho está correto
import AdicionarEditarCliente from '../components/adicionareditarcliente';

const Clientes = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await api.getClientes();
        setClientes(response.data);
        setLoading(false);
      }
       catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Erro ao carregar clientes. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Clientes</Text>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <ScrollView>
          {clientes.map((cliente) => (
            <TouchableOpacity
              key={cliente.id}
              style={styles.cliente}
              onPress={() => navigation.navigate('AdicionarEditarCliente', { cliente })}
            >
              <Text>{cliente.nome}</Text>
              <Text>{cliente.email}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <Button title="Adicionar Cliente" onPress={() => navigation.navigate('AdicionarEditarCliente')} />
      <Button title="Excluir Cliente" onPress={() => navigation.navigate('ExcluirCliente')} />
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
  cliente: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Clientes;
