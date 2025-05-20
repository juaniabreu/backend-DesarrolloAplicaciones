import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomTabsNavigator from '../components/BarraInferior'; // Asegúrate de que la ruta sea correcta

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Perfil!</Text>
      
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#E5731A',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
