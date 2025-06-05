import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

const RegisterScreen = () => {
  const [form, setForm] = useState({
    nome: 'Sayuri',
    sobrenome: 'Andrade',
    cpf: '000.000.000-00',
    identidade: '000',
    email: 'sayurideandrade11@gmail.com',
    senha: '1234',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Cadastro realizado!', `Bem-vindo(a), ${form.nome}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/logocasalimpa.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Faça seu cadastro!</Text>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange('nome', text)}
            value={form.nome}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Sobrenome:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange('sobrenome', text)}
            value={form.sobrenome}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text>CPF:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleChange('cpf', text)}
            value={form.cpf}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Identidade:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleChange('identidade', text)}
            value={form.identidade}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text>E-mail:</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            onChangeText={(text) => handleChange('email', text)}
            value={form.email}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Senha:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => handleChange('senha', text)}
            value={form.senha}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
