import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

// Importando todas as telas
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CasaScreen from './screens/CasaScreen';
import ServicosScreen from './screens/ServicosScreen';
import AgendamentosScreen from './screens/AgendamentosScreen';
import AvaliacoesScreen from './screens/AvaliacoesScreen';
import PerfilScreen from './screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Casa" component={CasaScreen} />
        <Stack.Screen name="Serviços" component={ServicosScreen} />
        <Stack.Screen name="AgendamentosScreen" component={AgendamentosScreen} />
        <Stack.Screen name="Avaliações" component={AvaliacoesScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
