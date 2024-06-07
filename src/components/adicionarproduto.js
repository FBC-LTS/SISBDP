import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import api from './api'; // Certifique-se de que o caminho para o arquivo api está correto
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const AdicionarProduto = ({ navigation }) => {
  const data = [
    { label: 'Produto', value: 'produto' },
    { label: 'Serviço', value: 'servico' },
  ];

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [selectedTipo, setSelectedTipo] = useState(null);

  const adicionarProduto = async () => {
    if (!selectedTipo || !nome || !preco || !quantidade) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      await api.post('/produtos', {
        tipo: selectedTipo,
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

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.label}</Text>
        {item.value === selectedTipo && <AntDesign name="check" size={20} color="#000" />}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastrar um novo produto</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Selecione um item"
        searchPlaceholder="Pesquisar..."
        value={selectedTipo}
        onChange={(item) => {
          setSelectedTipo(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
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
  dropdown: {
    width: '100%',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  placeholderStyle: {
    color: '#aaa',
  },
  selectedTextStyle: {
    color: '#000',
  },
  inputSearchStyle: {
    color: '#000',
  },
  iconStyle: {
    marginRight: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  itemText: {
    color: '#000',
  },
});

export default AdicionarProduto;
