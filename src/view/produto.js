import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import axios from "axios";
import BottomNavBar from "../components/BottomNavBar";

const Produto = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("https://sisbdpapi-production.up.railway.app/");
        console.log("Dados da API:", response.data); // Verificar a estrutura dos dados retornados
        setProdutos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produtos: ", error);
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  const renderProduto = ({ item }) => (
    <View style={styles.produtoItem}>
      <Text style={styles.produtoName}>{item.name}</Text>
      <Text style={styles.produtoDescription}>{item.description}</Text>
      <Text style={styles.produtoPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id ? item.id.toString() : item.name} // Ajustar a chave conforme necessário
      />
      <Button title="Exibir Mais..." onPress={() => navigation.navigate("Exibir Mais")} />
      <Button title="Adicionar Produto" onPress={() => navigation.navigate("Adicionar Produto")} />
      <BottomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  produtoItem: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  produtoName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  produtoDescription: {
    fontSize: 14,
    color: "#333",
  },
  produtoPrice: {
    fontSize: 16,
    color: "#007BFF",
  },
});

export default Produto;
