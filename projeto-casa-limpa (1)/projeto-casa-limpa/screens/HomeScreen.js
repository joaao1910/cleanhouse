import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo - Caminho corrigido */}
      <Image
        source={require('../assets/logocasalimpa.jpeg')} // Ajuste esse caminho conforme sua estrutura
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Pergunta */}
      <Text style={styles.title}>No que está pensando hoje?</Text>

      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Casa')}
      >
        <Text style={styles.buttonText}>Casa</Text>
      </TouchableOpacity>

    

      {/* Menu Inferior */}
      <View style={styles.footer}>
        <FooterIcon name="home" label="Início" />
        <FooterIcon name="briefcase" label="Serviço" />
        <FooterIcon name="calendar" label="Agenda" />
        <FooterIcon name="star" label="Avaliação" />
        <FooterIcon name="user" label="Perfil" />
      </View>
    </View>
  );
};

const FooterIcon = ({ name, label }) => (
  <View style={styles.footerItem}>
    <FontAwesome name={name} size={24} color="#fff" />
    <Text style={styles.footerText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  logo: {
    width: 160,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#36A9E1',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#36A9E1',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default HomeScreen;
