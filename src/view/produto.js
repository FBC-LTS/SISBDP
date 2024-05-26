import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import api from '../components/api';
import BottomNavBar from '../components/BottomNavBar';

const Produto = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/produto.json');
        setProdutos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        if(error.response.status === 422){
            Alert.alert('Erro', 'Erro ao carregar produtos: {error.response.data.detail[0].msg}');
        } else {
            Alert.alert('Erro', 'Erro ao carregar produtos. Tente novamente mais tarde.');
        }
        
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produto</Text>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <ScrollView>
          {produtos.map((produto) => (
            <View key={produto.id} style={styles.produto}>
              <Text>{produto.nome}</Text>
              <Text>{produto.preco}</Text>
            </View>
          ))}
        </ScrollView>
      )}
      <Button title="Adicionar Produto" onPress={() => navigation.navigate('AdicionarProduto')} />
      <BottomNavBar />
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
  produto: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Produto;
