import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [cpf, setCpf] = useState('123');
  const [senha, setSenha] = useState('123');

 const handleLogin = () => {
  if (cpf === '123' && senha === '123') {
    Alert.alert('Login realizado!', 'Bem-vindo(a)!');
    navigation.navigate('Home'); // <-- mudar de 'Casa' para 'Home'
  } else {
    Alert.alert('Erro', 'CPF ou senha inválidos');
  }
};
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Image
        source={require('../assets/logocasalimpa.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Faça seu login!</Text>

      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    fontSize: 16,
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
