// components/FooterNav.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FooterNav = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <FooterIcon name="home" label="Início" onPress={() => navigation.navigate('Home')} />
      <FooterIcon name="briefcase" label="Serviços" onPress={() => navigation.navigate('Serviços')} />
      <FooterIcon name="calendar" label="Agenda" onPress={() => navigation.navigate('Agendamentos')} />
      <FooterIcon name="star" label="Avaliações" onPress={() => navigation.navigate('Avaliações')} />
      <FooterIcon name="user" label="Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
};

const FooterIcon = ({ name, label, onPress }) => (
  <TouchableOpacity style={styles.footerItem} onPress={onPress}>
    <FontAwesome name={name} size={24} color="#fff" />
    <Text style={styles.footerText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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

export default FooterNav;
