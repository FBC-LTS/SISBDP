import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import api from '../api'; // Importe o axios configurado
import BottomNavBar from '../components/BottomNavBar';

const Produto = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('/produtos');
        setProdutos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProdutos();
  }, []);

  const renderProduto = ({ item }) => (
    <View style={styles.produtoItem}>
      <Text style={styles.produtoNome}>{item.nome}</Text>
      <Text style={styles.produtoPreco}>{item.preco}</Text>
      <Text style={styles.produtoEstoque}>Estoque: {item.estoque}</Text>
      <Button title="Ações" onPress={() => navigation.navigate('Ações')} />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Produtos</Text>
      </View>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Exibir Mais..."
        onPress={() => navigation.navigate('Exibir Mais')}
      />
      <Button
        title="Adicionar Produto"
        onPress={() => navigation.navigate('Adicionar Produto')}
      />
      <BottomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  produtoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  produtoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  produtoPreco: {
    fontSize: 16,
    color: '#fff',
  },
  produtoEstoque: {
    fontSize: 16,
    color: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Produto;
