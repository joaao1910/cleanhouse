import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FooterNav from './FooterNav'; // <-- Importando componente reutilizável

const services = [
  {
    id: '1',
    name: 'Maria do Socorro',
    rooms: 5,
    type: 'Pesada',
    extras: 'passar e cozinhar',
  },


  {
    id: '2',
    name: 'Joana do Santos',
    rooms: 6,
    type: 'Pesada',
    extras: 'passar',
  },

];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={require('../assets/imgperfil.jpeg')} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.bold}>Descrição:</Text>
          <Text>Comados: {item.rooms}</Text>
          <Text>Tipo de limpeza: {item.type}</Text>
          <Text>Adicionais: {item.extras}</Text>
          <Text>Valor: A combinar</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AgendamentosScreen')}
      >
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
    </View>


  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/imgperfil.jpeg')} style={styles.logo} />
      <Text style={styles.title}>Serviços</Text>
      <Text style={styles.subtitle}>Casa</Text>

      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

       {/* Rodapé reutilizável com navegação funcional */}
      <FooterNav />
      
    </SafeAreaView>
  );
}

const FooterIcon = ({ icon, label }) => (
  <View style={styles.footerItem}>
    <FontAwesome name={icon} size={24} color="#fff" />
    <Text style={styles.footerText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  logo: {
    width: 0,
    height: 0,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#2196F3',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#d5ecf8',
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: '#cde',
    borderRadius: 10,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 10,
    backgroundColor: '#eb4034',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#36A9E1',
    paddingTop: 8,
    paddingBottom: 12,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
});
