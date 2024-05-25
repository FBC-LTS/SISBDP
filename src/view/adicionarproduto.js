import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import api from "../components/api";    

const AdicionarProduto = ({navigation}) => {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [loading, setLoading] = useState(false);
    
    const adicionarProduto = async () => {
        try {
            setLoading(true);
            await api.post("/produtos", {
                nome,
                preco,
                estoque,
            });
            setLoading(false);
            navigation.goBack();
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Produto</Text>
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
            />
            <TextInput
                style={styles.input}
                placeholder="Estoque"
                value={estoque}
                onChangeText={setEstoque}
            />
            <Button
                title="Adicionar Produto"
                onPress={handleAddProduct}
                disabled={loading}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: "#000",
    },
});

export default AdicionarProduto;