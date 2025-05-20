import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CourseDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as { id: string };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de Curso</Text>
      <Text style={styles.text}>ID del curso: {id}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1A31',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default CourseDetailScreen;
