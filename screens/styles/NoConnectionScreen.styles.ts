// screens/NoConnectionScreen.styles.ts

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31',
    alignItems: 'center',
    paddingTop: 40, // el título estará arriba de todo
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  topImage: {
    width: width, // ancho total de la pantalla
    height: width * 0.5, // altura proporcional al ancho
    marginBottom: 60,
    resizeMode: 'cover',
  },
  centerImage: {
    width: 250, // un poco más chica
    height: 220,
    marginBottom: 80,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#E5731A',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 12,
    marginTop: 20, // espacio respecto a la imagen sinwifi
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

