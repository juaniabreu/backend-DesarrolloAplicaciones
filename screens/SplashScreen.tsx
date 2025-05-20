// screens/SplashScreen.tsx

import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
  const navigation = useNavigation();

  
  useEffect(() => {
    const checkConnection = async () => {
      const state = await NetInfo.fetch();

      // Espera 2 segundos para mostrar la rueda de carga
      setTimeout(() => {
        if (state.isConnected) {
          navigation.navigate('Home' as never); // Asegurate de tener esta ruta en tu navegación
        } else {
          navigation.navigate('NoConnection' as never);
        }
      }, 2000);
    };

    checkConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/e67b453d-984f-45d5-a91f-8611a164d75f.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#E5731A" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40, // empuja el logo un poco hacia arriba
  },
});
