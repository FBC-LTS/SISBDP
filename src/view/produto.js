import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BottomNavBar from "../components/BottomNavBar";

const Produto = ({ navigation }) => {
  const produto = [
    { id: "1", nome: "Produto1", preço: 'R$ 10,00', estoque: '10'},
    { id: "2", nome: "Produto2", preço: 'R$ 20,00', estoque: '20'},
    { id: "3", nome: "Produto3", preço: 'R$ 30,00', estoque: '30'},
    { id: "4", nome: "Produto4", preço: 'R$ 40,00', estoque: '40'},
    { id: "5", nome: "Produto5", preço: 'R$ 50,00', estoque: '50'},
  ];

    const renderProduto = ({ item }) => (
        <View style={styles.produtoItem}>
        <Text style={styles.produtoNome}>{item.nome}</Text>
        <Text style={styles.produtoPreço}>{item.preço}</Text>
        <Text style={styles.produtoEstoque}>Estoque: {item.estoque}</Text>
        <Button title="Ações" onPress={() => navigation.navigate("Ações")} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Produtos</Text>
        </View>
        <FlatList
            data={produto}
            renderItem={renderProduto}
            keyExtractor={(item) => item.id}
        />
        <Button title= "Exibir Mais..." onPress={() => navigation.navigate("Exibir Mais")} />
        <Button title="Adicionar Produto" onPress={() => navigation.navigate("Adicionar Produto")} />
        <BottomNavBar navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    produtoItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    produtoNome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    produtoPreço: {
        fontSize: 16,
    },
    produtoEstoque: {
        fontSize: 16,
    },
});

export default Produto;