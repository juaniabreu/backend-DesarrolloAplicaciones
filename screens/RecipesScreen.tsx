import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Recetas</Text>
    </View>
  );
};

export default RecipesScreen;

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
