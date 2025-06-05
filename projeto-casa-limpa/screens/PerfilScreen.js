import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FooterNav from './FooterNav';


export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header do Perfil */}
        <View style={styles.profileHeader}>
          <Image source={require('../assets/imgperfil.jpeg')} style={styles.profileImage} />
          <TouchableOpacity style={styles.editPhoto}>
            <Text style={styles.editPhotoText}>Editar</Text>
          </TouchableOpacity>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Jurema de Oliveira</Text>
            <Text style={styles.role}>Diarista</Text>
            <Text style={styles.detail}><Text style={styles.bold}>Idade:</Text> 56</Text>
            <Text style={styles.detail}><Text style={styles.bold}>Localidade:</Text> São Paulo, Brasil</Text>
            <Text style={styles.detail}><Text style={styles.bold}>Tel:</Text> (11) 93534-7855</Text>
            <Text style={styles.detail}><Text style={styles.bold}>Email:</Text> jujudeoliveira@gmail.com</Text>
          </View>
        </View>

        {/* Seções Editáveis */}
        {['Sobre Mim', 'Habilidades', 'Objetivo'].map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar Texto</Text>
              <FontAwesome name="pencil" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Avaliações */}
        <Text style={styles.sectionTitle}>Avaliações</Text>
        <View style={styles.reviewCard}>
          <Image source={require('../assets/imgperfil.jpeg')} style={styles.reviewImage} />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewName}>Maria do Socorro</Text>
            <View style={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FontAwesome key={i} name="star" size={24} color="#FFD700" />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Menu Inferior */}
      <View style={styles.menu}>
        <MenuItem icon="home" label="Início" />
        <MenuItem icon="briefcase" label="Serviço" />
        <MenuItem icon="calendar" label="Agenda" />
        <MenuItem icon="star" label="Avaliação" />
        <MenuItem icon="user" label="Perfil" />
      </View>
    </View>
  );
}

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <FontAwesome name={icon} size={24} color="#fff" />
    <Text style={styles.menuText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4EDF8',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  profileHeader: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  editPhoto: {
    position: 'absolute',
    top: 55,
    left: 10,
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 10,
  },
  editPhotoText: {
    fontSize: 12,
    textAlign: 'center',
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 15,
    marginBottom: 5,
  },
  detail: {
    fontSize: 13,
  },
  bold: {
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 30,
    marginTop: 5,
    width: 150,
    justifyContent: 'space-between',
  },
  editButtonText: {
    fontSize: 14,
  },
  reviewCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    padding: 12,
  },
  reviewImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
    marginTop: 4,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3199CC',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
});
