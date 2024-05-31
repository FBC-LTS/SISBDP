import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter o pacote expo-vector-icons instalado
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

  const renderProduto = ({ item }) => (
    <View style={styles.produtoItem}>
      <Text style={styles.produtoNome}>{item.nome}</Text>
      <Text style={styles.produtoPreco}>{`Preço: ${item.preco}`}</Text>
      <View style={styles.produtoQuantidadeContainer}>
        <TouchableOpacity style={styles.quantidadeButton}>
          <FontAwesome name="minus" size={16} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.produtoQuantidade}>{`Qtd. atual em estoque: ${item.quantidade}`}</Text>
        <TouchableOpacity style={styles.quantidadeButton}>
          <FontAwesome name="plus" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.exibirMaisButton}>
        <Text style={styles.exibirMaisTexto}>Exibir Mais ...</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produtos</Text>
      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : (
        <FlatList
          data={produtos}
          renderItem={renderProduto}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <TouchableOpacity style={styles.adicionarProdutoButton} onPress={() => navigation.navigate('AdicionarProduto')}>
        <Text style={styles.adicionarProdutoTexto}>Adicionar um novo produto</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0057D9',
    padding: 20,
    textAlign: 'center',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
  produtoItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  produtoPreco: {
    fontSize: 16,
    color: '#555',
  },
  produtoQuantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quantidadeButton: {
    backgroundColor: '#0057D9',
    padding: 10,
    borderRadius: 5,
  },
  produtoQuantidade: {
    fontSize: 16,
  },
  exibirMaisButton: {
    marginTop: 10,
  },
  exibirMaisTexto: {
    color: '#0057D9',
    fontWeight: 'bold',
  },
  adicionarProdutoButton: {
    backgroundColor: '#0057D9',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  adicionarProdutoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Produto;
