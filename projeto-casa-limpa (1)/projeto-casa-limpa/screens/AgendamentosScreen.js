import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import FooterNav from './FooterNav'; // Importando rodapé reutilizável

export default function AgendamentosScreen({ navigation }) {
  const openWhatsApp = () => {
    const phoneNumber = '5511916730319'; // Número com DDI (55) e DDD (11)
    const message = 'Olá, tenho interesse em falar sobre o serviço!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch(err => console.error('Erro ao abrir o WhatsApp:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logocasalimpa.jpeg')} style={styles.logo} />

      <Text style={styles.title}>Agendamentos</Text>

      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={require('../assets/imgperfil.jpeg')} style={styles.avatar} />
          <Text style={styles.name}>Maria do Socorro</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contato</Text>
          <Text><Text style={styles.bold}>Telefone:</Text> (11) 91673-0319</Text>
          <Text><Text style={styles.bold}>E-mail:</Text> mariadosocorro@gmail.com</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text>Meu nome é Maria do Socorro, tenho 23 anos. No momento estou procurando uma diarista para me auxiliar na faxina no dia a dia.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text>Comodos: 5</Text>
          <Text>Tipo de limpeza: Pesada</Text>
          <Text>Adicionais: Passar e cozinhar</Text>
          <Text>Valor: a combinar</Text>
        </View>

        <TouchableOpacity style={styles.agendadoBtn} onPress={openWhatsApp}>
          <Text style={styles.btnText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>

      <FooterNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  logo: {
    width: 0,
    height: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 22,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#d5ecf8',
    borderRadius: 14,
    padding: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  agendadoBtn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginTop: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

