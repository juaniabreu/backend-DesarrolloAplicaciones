import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/NoConnectionScreen.styles'; // Asegúrate de que la ruta sea correcta

const NoConnectionScreen = () => {
  const navigation = useNavigation();

  const handleRetry = () => {
    navigation.navigate('Splash' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cocina con recetas de calidad</Text>

      <Image
        source={require('../assets/Noconexion.png')}
        style={styles.topImage}
        resizeMode="contain"
      />

      <Image
        source={require('../assets/sinwifi.png')}
        style={styles.centerImage}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button} onPress={handleRetry}>
        <Text style={styles.buttonText}>Volver a inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoConnectionScreen;
