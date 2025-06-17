import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import FooterNav from './FooterNav'; // Caminho correto para componente reutilizável

// Dados estáticos simulando serviços
const services = [
  {
    id: '1',
    name: 'Maria do Socorro',
    rooms: 5,
    type: 'Pesada',
    extras: 'passar e cozinhar',
  },
];

export default function CasaScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={require('../assets/imgperfil.jpeg')} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.bold}>Descrição:</Text>
          <Text>Comodos: {item.rooms}</Text>
          <Text>Tipo de limpeza: {item.type}</Text>
          <Text>Adicionais: {item.extras}</Text>
          <Text>Valor: a combinar</Text>
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
      <Text style={styles.title}>Serviços</Text>
      <Text style={styles.subtitle}>Casa</Text>

      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }} // evita sobreposição com o rodapé
      />

     <FooterNav />
    </SafeAreaView>
  );
}

// Estilos ajustados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
    backgroundColor: '#00C853',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
