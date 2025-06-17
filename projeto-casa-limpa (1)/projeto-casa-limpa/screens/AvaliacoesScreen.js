import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FooterNav from './FooterNav'; // Componente de rodapé compartilhado

export default function AvaliacaoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Título */}
        <Text style={styles.title}>Suas avaliações</Text>

        {/* Card de avaliação */}
        <View style={styles.card}>
          {/* Imagem de perfil */}
          <Image
            source={require('../assets/imgperfil.jpeg')}
            style={styles.profileImage}
          />

          {/* Informações */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Maria do Socorro</Text>
            <Text style={styles.label}>Contato</Text>
            <Text style={styles.details}>Telefone: (11) 91673-0319</Text>
            <Text style={styles.details}>E-mail: mariadosocorro@gmail.com</Text>
          </View>

          {/* Data */}
          <View style={styles.dateContainer}>
            <Text style={styles.dateTitle}>Data de conclusão</Text>
            <Text style={styles.date}>02.06.2023</Text>
          </View>
        </View>

        {/* Estrelas */}
        <View style={styles.starsContainer}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome key={i} name="star" size={32} color="#FFD700" />
          ))}
        </View>
      </ScrollView>

      {/* Rodapé reutilizável */}
      <FooterNav />
    </View>
  );
}

// 🎨 Estilos integrados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 20,
    paddingBottom: 100, // Espaço para o FooterNav
  },
  title: {
    color: '#56C271',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  details: {
    fontSize: 13,
  },
  dateContainer: {
    backgroundColor: '#00B36B',
    borderRadius: 50,
    padding: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTitle: {
    color: '#fff',
    fontSize: 12,
  },
  date: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
