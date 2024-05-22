import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';


const Home = ({ navigation }) => {
  const [userName, setUserName] = useState('USUÁRIO'); // Armazena o nome do usuário
  const [notifications, setNotifications] = useState([]); // Armazena as notificações
  const [lowStockProducts, setLowStockProducts] = useState([]); // Armazena produtos em estoque baixo
  const [scheduledAppointments, setScheduledAppointments] = useState([]); // Armazena agendamentos

  useEffect(() => {
    // Simulação de carregamento de dados das APIs (notificações, produtos em estoque baixo, agendamentos)
    const loadFakeData = async () => {
      // Dados fictícios para notificações
      const fakeNotifications = Array.from({ length: 5 }, (_, index) => ({
        id: index.toString(),
        title: `Notificação ${index + 1}`,
      }));
      setNotifications(fakeNotifications);

      // Dados fictícios para produtos em estoque baixo
      const fakeLowStockProducts = Array.from({ length: 5 }, (_, index) => ({
        id: index.toString(),
        name: `Produto ${index + 1}`,
        quantity: Math.floor(Math.random() * 10), // Quantidade aleatória entre 0 e 10
        image: 'https://via.placeholder.com/150', // URL da imagem fictícia
      }));
      setLowStockProducts(fakeLowStockProducts);

      // Dados fictícios para agendamentos
      const fakeScheduledAppointments = Array.from({ length: 5 }, (_, index) => ({
        id: index.toString(),
        customer: `Cliente ${index + 1}`,
        date: `Data ${index + 1}`,
      }));
      setScheduledAppointments(fakeScheduledAppointments);
    };

    loadFakeData();
  }, []);

  const handlePress = () => {
    navigation.navigate('Details'); // Navega para a tela "Details"
  };

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text>{item.title}</Text>
    </View>
  );

  const renderLowStockProduct = ({ item }) => (
    <View style={styles.lowStockProductItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productStock}>Estoque atual: {item.quantity}</Text>
    </View>
  );

  const renderScheduledAppointment = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.appointmentCustomer}>{item.customer}</Text>
      <Text style={styles.appointmentDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo(a), {userName}!</Text>
        <Button title="Ir para Detalhes" onPress={handlePress} />
      </View>

      <FlatList
        style={styles.section}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Notificações</Text>}
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />

      

      <FlatList
        style={styles.section}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Produtos em Estoque Baixo</Text>}
        data={lowStockProducts}
        renderItem={renderLowStockProduct}
        keyExtractor={(item) => item.id}
      />

      <FlatList
        style={styles.section}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Agendamentos</Text>}
        data={scheduledAppointments}
        renderItem={renderScheduledAppointment}
        keyExtractor={(item) => item.id}
      />

      <BottomNavBar navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    padding: 20,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  userName: {
    color: '#00057D9',
  },
  notificationSection: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  notificationItem: {
    padding: 10,
    backgroundColor: '#2a2a2a',
    borderRadius: 5,
    marginBottom: 10,
  },
  lowStockProductItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    fontSize: 16,
    color: '#fff',
  },
  productStock: {
    fontSize: 14,
    color: '#999',
  },
  appointmentItem: {
    padding: 10,
    backgroundColor: '#2a2a2a',
    borderRadius: 5,
    marginBottom: 10,
  },
  appointmentCustomer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  appointmentDate: {
    fontSize: 14,
    color: '#999',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default Home;
